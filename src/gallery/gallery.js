import React, { Component } from 'react';
import './gallery.css';

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      slideCount: 0,
    }

    this.previousImg = this.previousImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
  }

  previousImg() {
    this.setState({
      slideCount: this.state.slideCount - 1,
    })
  }

  nextImg() {
    this.setState({
      slideCount: this.state.slideCount + 1,
    })
  }


  render() {
    const { photos } = this.props;

    return (
      <div className="photo-gallery">
      <button onClick={this.previousImg}> Previous </button>
      <button onClick={this.nextImg}> Next </button>
      {
        photos.map((photo, index) => {
          if(this.state.slideCount === index) {
            return (
              <div key={photo.id}>
                <img src={photo.images.standard_resolution.url} alt={photo.caption} />
                <span>{photo.caption ? photo.caption.text : ''}</span>
              </div>
            )
          }
          return '';
        })
      } 
      </div>
    )
  }
}

export default Gallery;
