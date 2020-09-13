import React from 'react';

import './style.css';

interface PublicProps {
  text: string;
}

const SquareBtn = (props: PublicProps) => {
  const { text } = props;
  return <button className="btn-learnmore">{text}</button>;
};

export default SquareBtn;
