import React from 'react';
import ItemComponent from './ItemComponent';

const HomePage = ({ database }) => {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <div className="item-list">
        {database.map((item) => (
          <ItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default page.js;
