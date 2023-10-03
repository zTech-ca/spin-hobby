import React from 'react';

const QuickView = ({ onClose }) => {

    return (
        <div className="quick-view">
            <div className="quick-view-content">
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default QuickView;