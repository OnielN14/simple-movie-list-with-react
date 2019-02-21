import React, {Component} from 'react'

import APIKEY from '../apiKey'

class MovieDetail extends Component{
    constructor(props){
        super(props)

        this.state= {
            movieData: {}
        }
    }

    // life-cycle
    async componentDidMount(){
        if (this.props.location.query){
            console.log('Data Exist');
            
            this.setState({movieData:this.props.location.query})
        }
        else{
            await this.fetchMovieData(this.props.match.params.movieId)
        }
    }

    // methods
    fetchMovieData(movieId){
        let url = process.env.REACT_APP_MOVIEDB_ENDPOINT_V3 + '/movie/'+ movieId + '?api_key=' + APIKEY
        fetch(url).then( response => {
            return response.json()
        }).catch( error => console.log(error)).then(response => {            
            this.setState({movieData:response})
        })
    }

    render(){             
        return (
            <div>
                <h1>{this.state.movieData.title}</h1>
                <p>{this.state.movieData.overview}</p>
            </div>
        )           
    }
}

export default MovieDetail