import React from 'react';

const ItemComponent = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemComponent;
