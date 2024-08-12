import React from 'react';


const CubeComponent = () => {
  return (
    <div className="relative" style={{ perspective: '800px' }}>
      <div
        className="cube w-40 h-40 absolute top-32 left-2/5 transform transition-transform ease duration-500 m-8"
        style={{
          transformStyle: 'preserve-3d',
          animation: 'rotateCube 20s linear infinite',
        }}
      >
        <div
          className="face front absolute flex items-center justify-center p-24"
          style={{
            transform: 'translateZ(2rem)',
            boxShadow: '0px 0px 10px 10px rgba(238, 124, 83, 0.64)',
          }}
        ></div>
        <div
          className="face back absolute flex items-center justify-center p-24"
          style={{
            transform: 'translateZ(-2rem) rotateY(180deg)',
            boxShadow: '0px 0px 10px 10px rgba(238, 124, 83, 0.64)',
          }}
        ></div>
        <div
          className="face right absolute flex items-center justify-center p-24"
          style={{
            transform: 'rotateY(90deg) translateZ(2rem)',
            boxShadow: '0px 0px 10px 10px rgba(238, 124, 83, 0.64)',
          }}
        ></div>
        <div
          className="face left absolute flex items-center justify-center p-24"
          style={{
            transform: 'rotateY(-90deg) translateZ(2rem)',
            boxShadow: '0px 0px 10px 10px rgba(238, 124, 83, 0.64)',
          }}
        ></div>
        <div
          className="face top absolute flex items-center justify-center p-24"
          style={{
            transform: 'rotateX(90deg) translateZ(2rem)',
            boxShadow: '0px 0px 10px 10px rgba(238, 124, 83, 0.64)',
          }}
        ></div>
        <div
          className="face bottom absolute flex items-center justify-center p-24"
          style={{
            transform: 'rotateX(-90deg) translateZ(2rem)',
            boxShadow: '0px 0px 10px 10px rgba(238, 124, 83, 0.64)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default CubeComponent;
