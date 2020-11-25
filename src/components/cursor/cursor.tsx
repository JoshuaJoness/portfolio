import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const addEventListeners = () => {
    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);
  };

  const removeEventListeners = () => {
    document.body.removeEventListener('mousemove', onMouseMove);
    document.body.removeEventListener('mouseenter', onMouseEnter);
    document.body.removeEventListener('mouseleave', onMouseLeave);
  };

  const cursorClasses = classNames(
    'cursor',
    {
      'cursor--hidden': hidden,
    },
  );

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;
