import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'

import MovieDetail from './page/MovieDetail'
import MovieList from './page/MovieList'

import './App.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <Route exact path="/" component={MovieList}/>
          <Route path={`/movie/:movieId`} component={MovieDetail}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
