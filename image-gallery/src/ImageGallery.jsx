import React, { useState } from 'react';

function ImageGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]); // show first image by default

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Main large image */}
      <img 
        src={currentImage} 
        alt="Main display" 
        style={{ width: '300px', height: '200px', objectFit: 'cover', marginBottom: '1rem' }} 
      />

      {/* Thumbnail images */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        {images.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            onClick={() => setCurrentImage(img)}
            style={{
              width: '60px',
              height: '40px',
              objectFit: 'cover',
              cursor: 'pointer',
              border: img === currentImage ? '2px solid blue' : '1px solid #ccc'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
