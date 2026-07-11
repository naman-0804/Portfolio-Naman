import React, { useEffect } from 'react';
import '../Design/eyefollower.css';

const EyeFollower = () => {
    useEffect(() => {
        let animationFrameId;
        const pupils = document.querySelectorAll('.pupil');

        const handleMove = (e) => {
            const clientX = e.clientX || (e.touches && e.touches[0].clientX);
            const clientY = e.clientY || (e.touches && e.touches[0].clientY);

            if (clientX === undefined || clientY === undefined) {
                return;
            }

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = requestAnimationFrame(() => {
                pupils.forEach(pupil => {
                    const eye = pupil.parentElement;
                    const rect = eye.getBoundingClientRect();
                    const eyeCenterX = rect.left + rect.width / 2;
                    const eyeCenterY = rect.top + rect.height / 2;
                    const angle = Math.atan2(clientY - eyeCenterY, clientX - eyeCenterX);
                    const radius = eye.offsetWidth / 4;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    pupil.style.transform = `translate(${x}px, ${y}px)`;
                });
            });
        };

        document.addEventListener('mousemove', handleMove, { passive: true });
        document.addEventListener('touchmove', handleMove, { passive: true });

        return () => {
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('touchmove', handleMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

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

