import React from 'react';
import './Modal.scss';

interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className={`Modal ${isOpen ? 'open' : ''}`}>
            <div className="Modal-Content">
                <button className="Modal-Close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;