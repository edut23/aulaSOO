import React, { useState } from 'react'

const Test = () => {
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleButtonClick = (e) => {
        const newX = Math.random() * (window.innerWidth - 100);
        const newY = Math.random() * (window.innerWidth - 100);

        setPosition({x: newX, y: newY});
    }

    return(
        <div>
            <h1>Você gosta de pagode?</h1>
            <div>
                <button 
                    onClick={() => window.location.href = "https://www.youtube.com/watch?v=vk5mRdPHT20"}
                >
                    Sim
                </button>
                <button 
                    onClick={handleButtonClick} 
                    style={{position: (position.x === 0 && position.y === 0) ? "" : 'absolute', top: position.y, left: position.x}}
                >
                    Não
                </button>
            </div>
        </div>
    )
}

export default Test;