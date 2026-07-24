import React, { useEffect, useRef } from 'react';
import '../Design/eyefollower.css';

const EyeFollower = () => {
    // Cache the rects to avoid layout thrashing
    const eyesRectsRef = useRef([]);

    useEffect(() => {
        let animationFrameId;
        const pupils = document.querySelectorAll('.pupil');
        const eyes = Array.from(pupils).map(p => p.parentElement);

        const updateRects = () => {
            eyesRectsRef.current = eyes.map(eye => {
                const rect = eye.getBoundingClientRect();
                return {
                    centerX: rect.left + rect.width / 2,
                    centerY: rect.top + rect.height / 2,
                    radius: eye.offsetWidth / 4
                };
            });
        };

        // Initial cache
        // Small delay to ensure elements are painted
        setTimeout(updateRects, 100);
        
        // Update cache on scroll or resize since position relative to viewport might change
        window.addEventListener('resize', updateRects, { passive: true });
        window.addEventListener('scroll', updateRects, { passive: true });

        const handleMove = (e) => {
            const clientX = e.clientX;
            const clientY = e.clientY;

            if (clientX === undefined || clientY === undefined) {
                return;
            }

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }

            animationFrameId = requestAnimationFrame(() => {
                if (eyesRectsRef.current.length === 0) {
                    updateRects();
                }

                pupils.forEach((pupil, index) => {
                    const rectData = eyesRectsRef.current[index];
                    if (!rectData) return;
                    
                    const angle = Math.atan2(clientY - rectData.centerY, clientX - rectData.centerX);
                    const x = rectData.radius * Math.cos(angle);
                    const y = rectData.radius * Math.sin(angle);
                    pupil.style.transform = `translate(${x}px, ${y}px)`;
                });
            });
        };

        // Only listen for mousemove. touchmove on mobile causes scroll lag.
        document.addEventListener('mousemove', handleMove, { passive: true });

        return () => {
            document.removeEventListener('mousemove', handleMove);
            window.removeEventListener('resize', updateRects);
            window.removeEventListener('scroll', updateRects);
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

