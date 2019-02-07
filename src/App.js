import React, { Component } from 'react';
import Results from './Result'
import './App.css';
import {Route , Link} from 'react-router-dom';
const API_KEY = '3905f9c4';
class App extends Component {
  state = {
    movies: [],
    query: "",
    allMovies: [],
    wacthedMovies: [],
    unwatchedMovies: [],
    error: ""
  }

  searchMovie = (movies) => {
    this.setState({
      query: movies
    })
  }

  getMovie = () => fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.query}`)
    .then(response => response.json())
    .then(data => this.setState({
      movies: data.Search,
      error: data.Error
    }))

  submitToWacthedMovies = (movies) => {
    this.setState((prevState) => ({
      wacthedMovies: [
        movies,
        ...prevState.wacthedMovies
      ],
      allMovies: prevState.allMovies.filter((allMovie) => (
        allMovie !== movies
      ))
    }))
  }

  submitTounWacthedMovies = (movies) => {
    this.setState((prevState) => ({
      unwatchedMovies: [movies, ...prevState.unwatchedMovies],
      allMovies: prevState.allMovies.filter((allmovie) => {
        return allmovie !== movies
      })
    }))
  }
    render(){
    return(
      <div className="test">
      <h1>My Movie Collection</h1>
      <Route exact
      path = "/"
      render = { ()=> (
    <div>
        <Link className="link" to = '/list'><h2>List Of Movies</h2></Link>
      <form onSubmit={e => {
         e.preventDefault()
         this.getMovie()
       }}>
          <input type ="text" placeholder="Search For A Movie"
            onChange ={(event) => this.searchMovie(event.target.value)}
      
          value ={this.state.query}></input>
            <button className="button1" type="submit">Submit</button>
      </form>
        {this.state.error && (
          <h3>{this.state.error}</h3>)
        }
        { this.state.movies  && this.state.movies.map((allmovie, index) => 
          <div key={index}>
            <h2>{allmovie.Title}</h2>
            <img src={allmovie.Poster} alt=""></img> 
            <button  className="button2" onClick={() => this.submitToWacthedMovies(allmovie)}>Already Watched</button>
            <button  className="button3" onClick={() => this.submitTounWacthedMovies(allmovie)}>Want To Watch</button>
          </div>)
        }  
    </div>)
    }
      />
      <Route exact 
          path = "/list"
          component = {
            ()=>(
           <Results wacthedMovies= {this.state.wacthedMovies}unwatchedMovies = {this.state.unwatchedMovies}/>
            )
          }/>
    </div>
    )
  }
}

export default App;
