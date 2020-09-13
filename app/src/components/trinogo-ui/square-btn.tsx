import React from 'react';

import './style.css';

interface PublicProps {
  text: string;
  onClickHandler: () => void;
}

const SquareBtn = (props: PublicProps) => {
  const { text, onClickHandler } = props;
  return (
    <button onClick={onClickHandler} className="btn-learnmore">
      {text}
    </button>
  );
};

export default SquareBtn;
