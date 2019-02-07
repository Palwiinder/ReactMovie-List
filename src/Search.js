import React from 'react';



class Search extends React.Component{
render(){
    return(
    <div className="movie">
        <li >
            <p>{this.props.info.Title}</p>
            <img src ={this.props.info.Poster}/>
        </li>
    </div>
    )
}
}

export default Search;