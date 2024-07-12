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
                <img src="/assets/images/Game_Tiles/Coming_Soon.png" alt="" />
                <img src="/assets/images/Game_Tiles/Atem_Sprint.png" alt="" />
                <img src="/assets/images/Game_Tiles/Atem_Runner.png" alt="" />
                <img src="/assets/images/Game_Tiles/Zerpmon_G1.png" alt="" />
                <img src="/assets/images/Game_Tiles/Coming_Soon.png" alt="" />
                <img src="/assets/images/Game_Tiles/Coming_Soon.png" alt="" />
                <img src="/assets/images/Game_Tiles/Coming_Soon.png" alt="" />
                <img src="/assets/images/Game_Tiles/Coming_Soon.png" alt="" />
                <img src="/assets/images/Game_Tiles/Coming_Soon.png" alt="" />
                <img src="/assets/images/Game_Tiles/Coming_Soon.png" alt="" />
                <img src="/assets/images/Game_Tiles/Coming_Soon.png" alt="" />
                <img src="/assets/images/Game_Tiles/Coming_Soon.png" alt="" />
            </div>
            <button className="handle right-handle" ref={rightHandleRef}>
                <div className="text">&#8250;</div>
            </button>
        </div>
    );
}

export default GameCarousel;
