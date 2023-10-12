import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ title }) => {
  return (
    <div className="item-list-container">
      <h2>{title}</h2>
    </div>
  );
}

export default ItemListContainer;
