import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalEl = document.getElementById('modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handlerKeydown);
    return () => {
      window.removeEventListener('keydown', handlerKeydown);
    };
  }, []);

  const handlerKeydown = ev => {
    if (ev.code === 'Escape') {
      onClose();
    }
  };

  const handlerBackdropClick = ev => {
    if (ev.target === ev.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handlerBackdropClick} className={css.Overlay}>
      <div className={css.Modal}>{children}</div>
    </div>,
    modalEl
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node,
};