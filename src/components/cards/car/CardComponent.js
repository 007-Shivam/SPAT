import React, { useState, useEffect } from 'react';
import './CardComponent.css';

export default function CardComponent({ data }) {
    // Track current image index for each card
    const [currentImages, setCurrentImages] = useState(data.map(() => 0));
    // Track fade state for transition effect
    const [fadeState, setFadeState] = useState(data.map(() => 'fade-in'));

    // Set up the slideshow effect
    useEffect(() => {
        const interval = setInterval(() => {
            // First trigger fade-out
            setFadeState(prevFade => prevFade.map(() => 'fade-out'));

            // After fade out completes, change the image and fade back in
            setTimeout(() => {
                setCurrentImages(prevState =>
                    prevState.map((currentIndex, cardIdx) => {
                        // If the card has multiple images, cycle through them
                        if (data[cardIdx].banners && data[cardIdx].banners.length > 1) {
                            return (currentIndex + 1) % data[cardIdx].banners.length;
                        }
                        return currentIndex;
                    })
                );

                // Trigger fade-in for the new image
                setFadeState(prevFade => prevFade.map(() => 'fade-in'));
            }, 50); // Wait for fade-out to complete

        }, 3500); // Change image every 4 seconds (including transition time)

        return () => clearInterval(interval);
    }, [data]);

    // Function to handle making a phone call
    const handleCall = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    // Function to open WhatsApp chat
    const handleWhatsApp = (phoneNumber, carInfo) => {
        // Create a pre-filled message about the car
        const message = `Hi, I'm interested in the ${carInfo.make} ${carInfo.model} (${carInfo.year}) in ${carInfo.location}. Can you provide more information?`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // Format the phone number (remove any spaces, dashes, etc.)
        const formattedNumber = phoneNumber.replace(/\D/g, '');

        // Open WhatsApp with the pre-filled message
        window.open(`https://wa.me/${formattedNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className='card-container'>
            {data.map((item, index) => (
                <div className="container" key={index}>
                    <div className="wrapper">
                        <div className="banner-image">
                            {/* Use the banners array instead of a single banner */}
                            {item.banners && item.banners.length > 0 ? (
                                <img
                                    className={`bnr ${fadeState[index]}`}
                                    src={item.banners[currentImages[index]]}
                                    alt={`${item.make} ${item.model} - image ${currentImages[index] + 1}`}
                                />
                            ) : (
                                // Fallback to single banner if no banners array exists
                                <img className='bnr' src={item.banner} alt={`${item.make} ${item.model}`} />
                            )}

                            {/* Image indicator dots */}
                            {item.banners && item.banners.length > 1 && (
                                <div className="image-indicators">
                                    {item.banners.map((_, dotIndex) => (
                                        <span
                                            key={dotIndex}
                                            className={`indicator-dot ${dotIndex === currentImages[index] ? 'active' : ''}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        <h1>{item.make} {item.model}</h1>
                        <p>
                            {/* Conditionally display year if it exists */}
                            {item.year && `${item.year} |`}
                            {/* Conditionally display mileage if it exists */}
                            {item.mileage && ` ${item.mileage} km  |`}
                            {/* Always display fuel type */}
                            {` ${item.fuel_type}`}
                        </p>
                        <p>{item.location}</p>
                    </div>
                    <div className="button-wrapper">
                        <button
                            className="btn outline call-btn"
                            onClick={() => handleCall('+91 9324121271')}
                        >
                            <span className="call-icon">📞</span> CALL
                        </button>
                        <button
                            className="btn fill whatsapp-btn"
                            onClick={() => handleWhatsApp(item.phoneNumber || '1234567890', item)}
                        >
                            <span className="whatsapp-icon">💬</span> WHATSAPP
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}