import React, { useEffect } from 'react';

import { StyledOverlay, StyledModal } from './Modal.styled';

export const Modal = ({ closeModal, modalData }) => {
  const handleOverayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  return (
    <StyledOverlay onClick={handleOverayClick}>
      <StyledModal>
        <img src={modalData.largeImageURL} alt={modalData.tags} />
      </StyledModal>
    </StyledOverlay>
  );
};
