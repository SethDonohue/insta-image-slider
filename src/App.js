import React, { Component } from 'react';
import superagent from 'superagent';

// be sure you have a env file at the root of this project with your token saved as IG_TOKEN
require('dotenv').config();

const apiUrl = `https://api.instagram.com/v1/users/self/media/recent/?access_token=`

class App extends Component {
  state = {
    photos: [],
  }

  requestPhotos(userName) {
    superagent.get(`{apiUrl}{process.env.IG_TOKEN}`)
    .then(response => {
      console.log('Response Data: ', response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram Image Slider</h1>
        </header>
      </div>
    );
  }
}

export default App;
