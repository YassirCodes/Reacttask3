import React, { useState } from 'react';
import './App.css';

const colors = [
  '#FF5733',
  '#33FF57',
  '#5733FF',
  '#FFFF33',
  '#33FFFF',
  '#808080',
  '#FFA500',
  '#0000FF',
  '#800080',
  '#FF0000',
  '#008080',
  '#FF1493',
  '#00FF7F',
  '#7B68EE',
  '#FFD700',
  '#40E0D0',
  '#800000',
];

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [showColorSquares, setShowColorSquares] = useState(false);

  const handleColorSquareClick = (color) => {
    setBackgroundColor(color);
  };

  const toggleColorSquares = () => {
    setShowColorSquares(!showColorSquares);
  };

  const ColorSquare = ({ color, onClick }) => {
    return (
      <div
        className="color-square"
        style={{ backgroundColor: color }}
        onClick={() => onClick(color)}
      ></div>
    );
  };

  return (
    <div className="App" style={{ backgroundColor: '#586EC2' }}>
      <div className="big-rounded-box" style={{ backgroundColor }}>
        <h1>Click to Change the Background Color</h1>
        <button onClick={toggleColorSquares}>Toggle Color Squares</button>
        {showColorSquares && (
          <div className="color-squares">
            {colors.map((color, index) => (
              <ColorSquare
                key={index}
                color={color}
                onClick={handleColorSquareClick}
              />
            ))}
          </div>
        )}
        <h2>Background Color: {backgroundColor}</h2>
      </div>
    </div>
  );
}

export default App;


