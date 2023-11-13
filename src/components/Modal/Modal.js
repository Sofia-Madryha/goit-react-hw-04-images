import React from 'react';
import ModalComponent from 'react-modal';
import "../Modal/Modal.css"

ModalComponent.setAppElement('#root');

export const Modal = ({
  isOpen,
  onRequestClose,
  style,
  contentLabel,
  largeImageURL,
}) => (
  <ModalComponent
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={style}
    contentLabel={contentLabel}
    
  >
    <img className="modal" src={largeImageURL} alt="" width="850" />
  </ModalComponent>
);
