// GameCarousel.tsx //

import React, { useEffect, useRef } from "react";
import './GameCarousel.css';

const GameCarousel: React.FC = () => {
    const gamesliderRef = useRef<HTMLDivElement>(null);
    const leftHandleRef = useRef<HTMLButtonElement>(null);
    const rightHandleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const leftHandle = leftHandleRef.current;
        const rightHandle = rightHandleRef.current;
        const gameslider = gamesliderRef.current;

        const handleLeftClick = () => {
            if (gameslider) {
                const scrollAmount = (gameslider.clientWidth / 4) * 4; // Move 4 images at a time
                gameslider.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            }
        };

        const handleRightClick = () => {
            if (gameslider) {
                const scrollAmount = (gameslider.clientWidth / 4) * 4; // Move 4 images at a time
                gameslider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        };

        leftHandle?.addEventListener("click", handleLeftClick);
        rightHandle?.addEventListener("click", handleRightClick);

        return () => {
            leftHandle?.removeEventListener("click", handleLeftClick);
            rightHandle?.removeEventListener("click", handleRightClick);
        };
    }, []);

    return (
        <div className="game-carousel-container">
            <button className="handle left-handle" ref={leftHandleRef}>
                <div className="text">&#8249;</div>
            </button>
            <div className="gameslider" ref={gamesliderRef}>
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=1" alt="1" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=2" alt="2" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=3" alt="3" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=4" alt="4" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=5" alt="5" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=6" alt="6" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=7" alt="7" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=8" alt="8" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=9" alt="9" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=10" alt="10" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=11" alt="11" />
                <img src="https://via.placeholder.com/210/37ebf3/ffffff?text=12" alt="12" />
            </div>
            <button className="handle right-handle" ref={rightHandleRef}>
                <div className="text">&#8250;</div>
            </button>
        </div>
    );
}

export default GameCarousel;
