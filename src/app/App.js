import React, { Component } from 'react';
import superagent from 'superagent';
import './App.css';

// be sure you have an env file at the root of this project with your token saved as REACT_APP_IG_TOKEN
require('dotenv').config();

const apiUrl = `https://api.instagram.com/v1/users/self/media/recent/?access_token=`
const token = `${process.env.REACT_APP_IG_TOKEN}`;
console.log(token);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
    this.requestPhotos = this.requestPhotos.bind(this);
  }

  requestPhotos() {
    superagent.get(`${apiUrl}${token}`)
    .then(response => {
      this.setState({
        photos: response.body.data,
      });
    })
    .catch(error => {
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
        onClick={this.requestPhotos}
        >
        Get Photos
        </button>
        {this.state.photos.map((photo, key) => {
          return (
            <div key={photo.id}>
              <img src={photo.images.standard_resolution.url} alt={photo.caption} />
            </div>
          )
        })}
        <p>{console.log(this.state.photos)}</p>
      </div>
    );
  }
}

export default App;
