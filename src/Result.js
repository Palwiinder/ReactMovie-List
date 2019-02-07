import React from 'react';
import Search from './Search'
import {Link} from 'react-router-dom'
class Results extends React.Component{
    render(){
        return(
            <div>
                <Link to = '/'><h2>Go Back To Search</h2></Link>
                <h3>wacthedMovies</h3>
            {this.props.wacthedMovies.map((wacthedMovie, index) => 
          <div key={index}><Search info={wacthedMovie}/>
          </div>)}
          <h3>WishList</h3>
          {this.props.unwatchedMovies.map((unwatchedMovie, index) => 
          <div key={index}><Search info={unwatchedMovie}/>
          </div>)}
            </div>
        )
    }
}
export default Results;