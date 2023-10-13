import React from 'react';

const Card = (props) => {
  return (
    <>
      <div className="card-icon">
        <span className="dot" style={{ backgroundColor: props.color }}>
          {props.icon}
        </span>
      </div>
      <div className="card-details">
        <p>{props.title}</p>
        <h3>{props.amount}</h3>
        <h4>
          {props.percentageChangeIcon} {props.percentageChangeText}
        </h4>
      </div>
    </>
  );
};

export default Card;