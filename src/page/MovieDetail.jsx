import React, {Component} from 'react'

import './MovieDetail.scss'
import APIKEY from '../apiKey'

class MovieDetail extends Component{
    constructor(props){
        super(props)

        this.state= {
            movieData: {}
        }
    }

    // life-cycle
    async componentWillMount(){
        if (this.props.location.query){
            console.log('Data Exist');
            
            this.setState({movieData:this.props.location.query})
        }
        else{
            await this.fetchMovieData(this.props.match.params.movieId)
        }
    }

    // methods
    async fetchMovieData(movieId){
        let url = process.env.REACT_APP_MOVIEDB_ENDPOINT_V3 + '/movie/'+ movieId + '?api_key=' + APIKEY
        await fetch(url).then( response => {
            return response.json()
        }).catch( error => console.log(error)).then(response => {            
            this.setState({movieData:response})
        })
    }

    render(){             
        return (
            <div className="container movie-detail">
                <div className="header">
                    <img className="header-image" src={`https://image.tmdb.org/t/p/original${this.state.movieData.backdrop_path}`} alt={`${this.state.movieData.title}-poster`}/>

                    <div className="header-text">
                        <h1 className="title">{this.state.movieData.title}</h1>
                        <p className="tagline">{this.state.movieData.tagline}</p>
                    </div>
                     
                </div>
                <div className="overview">
                    <h3>Overview</h3>
                    <p>{this.state.movieData.overview}</p>
                </div>
            </div>
        )           
    }
}

export default MovieDetail