import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
      original: '../../images/image1.JPG',
      thumbnail: '../../images/image1.JPG'
    },
    {
      original: '../../images/image2.JPG',
      thumbnail: '../../images/image2.JPG',
    },
    {
      original: '../../images/image3.JPG',
      thumbnail: '../../images/image3.JPG',
    },
];
class Images extends Component {

    render() {
        return <ImageGallery items={images} sizes="1x1"/>;
      }
}

export default Images;