import React, { Component } from 'react';
import './gallery.css';

// TODO: make gallery a sliding gallery!

class Gallery extends Component {
  render() {
    const { photos } = this.props;

    return (
      <div className="photo-gallery">
      {
        photos.map((photo, key) => {
          return (
            <div key={photo.id}>
              <img src={photo.images.standard_resolution.url} alt={photo.caption} />
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default Gallery;
