// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentActive, setCurrentActive] = useState(1);

  const next = () => {
    setCurrentActive((prevActive) => {
      let newActive = prevActive + 1;
      if (newActive > 4) {
        newActive = 4;
      }
      return newActive;
    });
  };

  const prev = () => {
    setCurrentActive((prevActive) => {
      let newActive = prevActive - 1;
      if (newActive < 1) {
        newActive = 1;
      }
      return newActive;
    });
  };

  const circles = [1, 2, 3, 4];

  const progress = (currentActive - 1) / (circles.length - 1) * 100 + '%';
//   const update = () => {

    return (
      <div className="container">
        <div className="progress-container">
          <div className="progress" style={{ width: progress }}></div>
          {circles.map((circle, idx) => (
            <div key={idx} className={`circle ${idx + 1 <= currentActive ? 'active' : ''}`}>
              {circle}
            </div>
          ))}
        </div>
        <button className="btn" id="prev" onClick={prev} disabled={currentActive === 1}>
          Prev
        </button>
        <button className="btn" id="next" onClick={next} disabled={currentActive === circles.length}>
          Next
        </button>
      </div>
    );
//   };

//   return update();
};

export default App;

