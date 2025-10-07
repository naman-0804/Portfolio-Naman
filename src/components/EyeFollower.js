import React, { useState, useEffect } from 'react';
import '../Design/eyefollower.css';

const EyeFollower = () => {
    // State to track if the screen is desktop-sized
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    // Effect to handle mouse movement
    useEffect(() => {
        if (!isDesktop) return; // Don't run this effect on mobile

        const handleMouseMove = (e) => {
            const pupils = document.querySelectorAll('.pupil');
            pupils.forEach(pupil => {
                const eye = pupil.parentElement;
                const rect = eye.getBoundingClientRect();
                const eyeCenterX = rect.left + rect.width / 2;
                const eyeCenterY = rect.top + rect.height / 2;
                const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
                const radius = eye.offsetWidth / 4;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                pupil.style.transform = `translate(${x}px, ${y}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDesktop]); // Rerun this effect if isDesktop changes

    // Effect to update the isDesktop state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // If it's not desktop, render nothing
    if (!isDesktop) {
        return null;
    }

    // If it is desktop, render the characters
    return (
        <div className="character-container">
            <div id="orange" className="character">
                <div className="eye"><div className="pupil"></div></div>
                <div className="eye"><div className="pupil"></div></div>
            </div>
            <div id="purple" className="character">
                <div className="eye"><div className="pupil"></div></div>
                <div className="eye"><div className="pupil"></div></div>
            </div>
            <div id="black" className="character">
                <div className="eye"><div className="pupil"></div></div>
                <div className="eye"><div className="pupil"></div></div>
            </div>
            <div id="yellow" className="character">
                <div className="eye"><div className="pupil"></div></div>
            </div>
        </div>
    );
};

export default EyeFollower;