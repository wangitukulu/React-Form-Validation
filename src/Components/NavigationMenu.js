import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import TotalPrice from './TotalPrice';

const NavigationMenu = ({finalPrice,total}) => {
  const location = useLocation()
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-nav justify-content-end">
        {location.pathname!=="/"&& total && <TotalPrice finalPrice={finalPrice} />}

      </li>
      </ul>

    </nav>

  );
};

export default NavigationMenu;