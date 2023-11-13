import { useState } from 'react';

import { Modal } from 'components/Modal/Modal';
import '../ImageGalleryItem/ImageGalleryItem.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

export const ImageGalleryItem = 
({image:{ id, webformatURL, largeImageURL }}) => {
const [isModalOpen, setIsModalOpen]= useState(false)

  const openModal = () => {
   setIsModalOpen(true)
  };

 const  closeModal = () => {
    setIsModalOpen(false)
  };

  return (
    <div key={id} className="image-gallery-item">
      <img
        className="image-gallery-item-image"
        src={webformatURL}
        alt={id}
        loading="lazy"
        onClick={openModal}
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
        largeImageURL={largeImageURL}
      />
    </div>
  );
};
