import React, { Component } from 'react'
import MovieItem from '../components/MovieItem'

import './MovieList.scss'
import APIKEY from '../apiKey'

class MovieList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieList: []
        }
    }

    // Life-Cycle
    async componentDidMount(){
        await this.fetchMovieData()
    }

    // Methods
    fetchMovieData(){
        let url = process.env.REACT_APP_MOVIEDB_ENDPOINT_V3 + '/movie/popular' + '?api_key=' + APIKEY

        fetch(url,{
            method: 'GET'
        }).then( response => {
            return response.json()
        }).catch( error => console.log(error)).then(response => {
            this.setState({movieList:response.results})
        })
    }

    render() {

        let movieList = this.state.movieList.map((item, index) => {
            return <MovieItem key={index.toString()} {...item} />
        })

        return (
            <section className="container movie-list">
                {movieList}
            </section>
        )
    }
}

export default MovieList