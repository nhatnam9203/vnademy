import React from 'react';

interface IProps{
    flex: number | string
}

const Spacer = ({ flex }: IProps) => {
  const spacerStyle = {
    flex: flex || 1, 
  };

  return <div style={spacerStyle}></div>;
};

export default Spacer;