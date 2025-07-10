import React from 'react';
import ImageGallery from './ImageGallery';

const imageUrls = [
  'https://placehold.co/600x400/0000FF/FFFFFF?text=Image+1',
  'https://placehold.co/600x400/FF0000/FFFFFF?text=Image+2',
  'https://placehold.co/600x400/00FF00/FFFFFF?text=Image+3',
  'https://placehold.co/600x400/FFA500/FFFFFF?text=Image+4'
];

function App() {
  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageGallery images={imageUrls} />
    </div>
  );
}

export default App;
