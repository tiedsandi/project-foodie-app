import React from 'react';

const Meal = ({ params }) => {
  return (
    <div>
      <h1>Meal</h1>
      <p>{params.slug}</p>
    </div>
  );
};

export default Meal;
