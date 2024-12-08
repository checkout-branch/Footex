import { useState, useEffect } from 'react';
import axios from 'axios';

const CloudinaryGallery = () => {
  const [images, setImages] = useState([]);
  const cloudName = 'du7bkj3re'; // Replace with your Cloudinary cloud name
  const apiKey = '857852115112666'; // Replace with your Cloudinary API Key
  const apiSecret = '9oMs72ruUPhOSmc1GlSVqVSFvvM'; // Replace with your Cloudinary API Secret (keep it secure)


  const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch images using CORS proxy
        const response = await axios.get( CLOUDINARY_URL, {
          headers: {
            Authorization: 'Basic ' + btoa(`${apiKey}:${apiSecret}`),
          },
        });
        console.log(response)
        setImages(response.data.resources);
      } catch (error) {
        console.error('Error fetching images from Cloudinary:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Cloudinary Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((image) => (
          <img
            key={image.public_id}
            src={image.secure_url}
            alt={image.public_id}
            style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default CloudinaryGallery;
