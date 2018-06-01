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
    console.log(this.state.slideCount);
    const { photos } = this.props;
    
    const previousJSX = this.state.slideCount > 0 ? (
      <button id="button-previous" onClick={this.previousImg}> Previous </button>
    ): null;

    const nextJSX = this.state.slideCount < 32 ? (
      <button id="button-next" onClick={this.nextImg}> Next </button>
    ): null;

    return (
      <div className="photo-gallery">
      {previousJSX}
      {nextJSX}
      <div id="img-container">
        {photos.map((photo, index) => {
          if(this.state.slideCount === index) {
            return (
              <div key={photo.id}>
                <img src={photo.images.standard_resolution.url} alt={photo.caption} />
                <p>{photo.caption ? photo.caption.text : ''}</p>
              </div>
            )
          }
          return '';
        })}
        </div>
      </div>
    )
  }
}

export default Gallery;
