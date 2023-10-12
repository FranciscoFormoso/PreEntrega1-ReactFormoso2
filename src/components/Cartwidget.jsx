import React from 'react';
import './CartWidget.css';

const Cartwidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <i className="fa fa-shopping-cart"></i>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default Cartwidget;
