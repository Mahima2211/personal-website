import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const images = [
    {
      original: '../../images/image1.jpeg',
    },
    {
      original: '../../images/image2.jpg',
    },
];
class Images extends Component {

    render() {
        return <ImageGallery items={images} showThumbnails={false}/>;
      }
}

export default Images;