import React from 'react';

const QuickView = ({ onClose }) => {
    const handleClose = () => {
        onClose();
    }

    return (
        <div className="quick-view">
            <div className="quick-view-content" onMouseLeave={handleClose}>
                Show this on hover
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default QuickView;