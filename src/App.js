import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { SearchBar } from './Components/SearchBar/SearchBar';
import ImageGallery from 'Components/ImageGallery/ImageGallery';
import Modal from 'Components/Modal/Modal';
import './App.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export function App() {
  const [searchQuery, setsearchQuery] = useState('');
  const [selectedImage, setselectedImage] = useState(null);
  const [selectedImageTags, setselectedImageTags] = useState(null);

  return (
    <div className="App">
      <SearchBar
        onSubmit={text => {
          setsearchQuery(text);
        }}
      />
      <ImageGallery
        query={searchQuery}
        onSelect={({ largeImage, tags }) => {
          setselectedImage(largeImage);
          setselectedImageTags(tags);
        }}
      />
      {selectedImage && (
        <Modal
          src={selectedImage}
          tags={selectedImageTags}
          onClose={() => {
            setselectedImage(null);
          }}
        />
      )}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </div>
  );
}

export default App;
