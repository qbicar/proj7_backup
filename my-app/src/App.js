import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Search from './components/Search';
import Nav from './components/Nav';
import NoResults from './components/NotFound';
import axios from 'axios';
import apiKey from './config';
import ImageList from './components/ImageList';
import Home from './components/Header';
import loading from './loading.svg';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true
    }
  }
  performSearch = (query = "greyscale") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error Fetching Data", error)
        this.setState({
          loading: false
        })
      })
  }

  componentDidMount() {
    this.performSearch()
  }


  render() {
    return (

      <div className="container">
        <BrowserRouter>

          <Home />
          <Search onSearch={this.performSearch} />
          <Nav performSearch={this.performSearch} />

          <Switch>
            <Route exact path="/" />
            <Route path="/:name" />
            <Route path="/ImageList/:type" component={ImageList} />
            <Route path={`match.search/:id`} component={Search} />
            <Route path="/search" component={Search} />
            <NoResults />
          </Switch>
        </BrowserRouter>
        <div className="photo-container">
          {
            (this.state.loading)
              ? <img src={loading} alt="Loading..." />

              : <ImageList data={this.state.images} />
          }
        </div>
      </div>
    )
  }
}


