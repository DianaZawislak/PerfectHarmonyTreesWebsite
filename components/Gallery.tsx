import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface Image {
  original: string;
  thumbnail: string;
}

interface GalleryProps {
  images?: Image[]; // make images prop optional
}

class Gallery extends React.Component<GalleryProps> {
  render() {
    // Provide a default array of images if none are provided
    const images = this.props.images || [
      {
        original: 'https://www.facebook.com/photo.php?fbid=562436542750720&set=pb.100069531378661.-2207520000.&type=3',
        thumbnail: 'https://www.facebook.com/photo.php?fbid=562436542750720&set=pb.100069531378661.-2207520000.&type=3',
      },
      {
        original: 'https://example.com/images/img2.jpg',
        thumbnail: 'https://example.com/images/thumb2.jpg',
      },
      // Add more default image objects here...
    ];

    return <ImageGallery items={images} />;
  }
}

export default Gallery;