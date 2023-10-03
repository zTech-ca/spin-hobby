import React, { useState } from 'react';
import './productCard.scss';
import QuickView from './QuickView';

export default function ProductCard() {
    const imageSource = [
      "https://drive.google.com/uc?id=1GyPJxF36hlp2JS7SeYrnW0Bmuc9KJyBq",
      "https://drive.google.com/uc?id=1MIbogRkUdngQXnaXT8Mufup-7CScTNRj",
      "https://drive.google.com/uc?id=1a_w8OcDV-IA5UMz7usKtO_lXf0YSee3u",
      "https://drive.google.com/uc?id=1gLp3gryMbGYpgAfAtnDGccME1lCzEyUU",
      "https://drive.google.com/uc?id=1iOOVa8mOrESI0o5o7au7nAOlPFAwbnLM",
    ];
  
    return <Previewer imageSource={imageSource} />;
}

export function Previewer({ imageSource }: { imageSource: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isQuickViewVisible, setIsQuickViewVisible] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSource.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? imageSource.length - 1 : prevIndex - 1
        );
    };

    const openQuickView = () => {
        setIsQuickViewVisible(true);
    }

    const closeQuickView = () => {
        setIsQuickViewVisible(false);
    }

    return (
        <div className="product-card">
            <div className="image-slider">
                <img className="slider-image" src={imageSource[currentIndex]} alt="Slide" />
                <button className="prev-button" onClick={prevSlide}>
                    &lt;
                </button>
                <div className="pagination-dots">
                    {imageSource.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                    ))}
                </div>
                <button className="next-button" onClick={nextSlide}>
                    &gt;
                </button>
            </div>
            <div className="product-data">
                <div className="product-price">
                    <p>$41</p>
                </div>
                <div className="product-description">
                    <p>Description</p>
                </div>
            </div>
            <button className="quick-view-text" onClick={openQuickView}>Quick View</button>
            {isQuickViewVisible && <QuickView onClose={closeQuickView}/>}
        </div>
    );
}