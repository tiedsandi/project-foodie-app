import React from 'react';

const Meal = ({ params }) => {
  return (
    <div>
      <h1>Meal detail</h1>
      <p>{params.mealSlug}</p>
    </div>
  );
};

export default Meal;
