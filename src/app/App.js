import React, { Component } from 'react';
import superagent from 'superagent';
import Gallery from '../gallery/gallery';
import './App.css';

// be sure you have an env file at the root of this project with your token saved as REACT_APP_IG_TOKEN
require('dotenv').config();

const apiUrl = `https://api.instagram.com/v1/users/self/media/recent/`;
const token = `${process.env.REACT_APP_IG_TOKEN}`;
const count = '10';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      // TODO: Add error State
      // TODO: Add loading state for slow networks on image request
    }
    this.requestPhotos = this.requestPhotos.bind(this);
  }

  requestPhotos() {
    console.log('Photo Request Sent.... Waiting for response...')
    superagent.get(`${apiUrl}?access_token=${token}&count=${count}`)
    .then(response => {
      this.setState({
        photos: response.body.data,
      });
    })
    .catch(error => {
      // TODO: Show warning message to user depending on the type of error,
      // can use error state to show modal if there is an error
      console.error('__REQUEST ERROR___:', error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram Image Slider</h1>
        </header>
        <button
        type='button'
        onClick={this.requestPhotos}>Get Photos</button>
        {/* TODO: Insert a form for image request count, form should also contain the above button */}
        {/* TODO: Insert a modal to use for ERROR state */}
        {/* TODO: Insert a modal to use for LOADING state */}
        <Gallery photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
