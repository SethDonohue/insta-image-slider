import React, { Component } from 'react';
import superagent from 'superagent';
import Gallery from '../gallery/gallery';
import './App.css';

// be sure you have an env file at the root of this project with your token saved as REACT_APP_IG_TOKEN
require('dotenv').config();

const apiUrl = `https://api.instagram.com/v1/users/self/media/recent/`;
const token = `${process.env.REACT_APP_IG_TOKEN}`;
const count = '100';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      error: null,
      loading: null,
    }
    this.requestPhotos = this.requestPhotos.bind(this);
  }


  componentWillMount() {
    this.requestPhotos();
  }

  requestPhotos() {
    this.setState({
      loading: true,
    });

    superagent.get(`${apiUrl}?access_token=${token}&count=${count}`)
    .then(response => {
      this.setState({
        photos: response.body.data,
        loading: false,
      });
    })
    .catch(error => {
      this.setState({
        loading: false,
        error: error,
      })
      console.error('__REQUEST ERROR___:', error);
    });
  }

  render() {
    const loadingModalJSX = this.state.loading ? (<div id="loading-modal"> Loading... </div>): null;
    const errorModalJSX = this.state.error ? (
      <div id="error-modal">
      <span>There was an error while requesting the images!</span>
      <p>{this.state.error.toString()}</p>
      </div>): null;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram Image Slider</h1>
        </header>
        
        {/* TODO: Insert a form for image request count, form should also contain the above button */}
        {/* TODO: Insert a modal to use for ERROR state */}
        {/* TODO: Insert a modal to use for LOADING state */}
        {loadingModalJSX}
        {errorModalJSX}
        <Gallery photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
