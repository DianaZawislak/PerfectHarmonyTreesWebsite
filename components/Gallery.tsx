import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/Gallery.css'; // Modify the path according to your directory structure


interface Image {
  original: string;
  thumbnail: string;
}

interface GalleryProps {
  images?: Image[]; // make images prop optional
}

class Gallery extends React.Component<GalleryProps> {
    renderItem = (item:any) => {
      return (
        <div className="image-container">
          <img className="cropped-image" src={item.original} />
          {
            item.description &&
            <span className="image-gallery-description" style={{ bottom: 0, position: 'absolute' }}>
              {item.description}
            </span>
          }
        </div>
      );
    }
  
    renderThumbnail = (item:any) => {
      return (
        <div className="thumbnail-container">
          <img className="cropped-thumbnail" src={item.thumbnail} />
        </div>
      );
    }
  
  render() {
    // Provide a default array of images if none are provided
    const images = this.props.images || [
      {
        original: 'https://cdn.discordapp.com/attachments/1110785495157461083/1117234852308189325/346969329_1380028732785287_3315446062634646354_n.jpg',
        thumbnail: 'https://cdn.discordapp.com/attachments/1110785495157461083/1117234852308189325/346969329_1380028732785287_3315446062634646354_n.jpg',
      },
      {
        original: 'https://cdn.discordapp.com/attachments/1110785495157461083/1117234833651929188/168932621_4032798493449353_37617570327783240_n.jpg',
        thumbnail: 'https://cdn.discordapp.com/attachments/1110785495157461083/1117234833651929188/168932621_4032798493449353_37617570327783240_n.jpg',
      },
      {
        original: 'https://cdn.discordapp.com/attachments/1110785495157461083/1117234020489629816/336567321_1415091715957877_1358520114622384673_n.jpg',
        thumbnail: 'https://cdn.discordapp.com/attachments/1110785495157461083/1117234020489629816/336567321_1415091715957877_1358520114622384673_n.jpg',
      },
      {
        original: 'https://cdn.discordapp.com/attachments/1110785495157461083/1122165714413965402/103947677_3191492257579985_2321984428911593400_n.jpg',
        thumbnail: 'https://cdn.discordapp.com/attachments/1110785495157461083/1122165714413965402/103947677_3191492257579985_2321984428911593400_n.jpg',
      },
      {
        original: 'https://cdn.discordapp.com/attachments/1110785495157461083/1122165715517063239/240968273_4500093863386478_7578723825911664071_n.jpg',
        thumbnail: 'https://cdn.discordapp.com/attachments/1110785495157461083/1122165715517063239/240968273_4500093863386478_7578723825911664071_n.jpg',
      },
      {
        original: 'https://cdn.discordapp.com/attachments/1110785495157461083/1122165715806458018/247020227_4634594843269712_3660688295380637952_n.jpg',
        thumbnail: 'https://cdn.discordapp.com/attachments/1110785495157461083/1122165715806458018/247020227_4634594843269712_3660688295380637952_n.jpg',
      },
      {
        original: 'https://cdn.discordapp.com/attachments/1110785495157461083/1122165716397867018/297795126_5545125695549951_5158975895880136470_n_1.jpg',
        thumbnail: 'https://cdn.discordapp.com/attachments/1110785495157461083/1122165716397867018/297795126_5545125695549951_5158975895880136470_n_1.jpg',
      },
      {
        original: 'https://cdn.discordapp.com/attachments/1110785495157461083/1122165830742974464/346795244_166372559727634_353316886378204062_n.jpg',
        thumbnail: 'https://cdn.discordapp.com/attachments/1110785495157461083/1122165830742974464/346795244_166372559727634_353316886378204062_n.jpg',
      },
      // Add more default image objects here...
    ];

    return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 60px)',
          marginBottom: '50px',
        }}>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ImageGallery 
              items={images} 
              renderItem={this.renderItem} 
              renderThumbInner={this.renderThumbnail} 
            />
          </div>
        </div>
      );
    }
}
  

export default Gallery;