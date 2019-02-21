import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './MovieItem.scss'

class MovieItem extends Component{
    constructor(props){
        super(props)

        this.state ={
            movieData : {}
        }
    }

    // life-cycle

    // method
    breakOverflowText(text){
        if(text.length > 250){
            return text.substr(0,250)+"..."
        }
        return text
    }

    render(){
        return (
            <div className="movie-item">
                <img className="image" src={`https://image.tmdb.org/t/p/original${this.props.poster_path}`} alt={`${this.title}-poster`}/>
                <div className="overview">
                    <h2>{this.props.title}</h2>
                    <p>{this.breakOverflowText(this.props.overview)}</p>
                    <Link to={{
                            pathname:`/movie/${this.props.id
                            }`,
                            query:{
                                ...this.props
                            }
                            }}>Click for detail</Link>
                </div>
            </div>
        )
    }
}

export default MovieItem