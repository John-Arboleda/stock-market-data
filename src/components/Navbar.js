import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Stocks',
    },
    {
      id: 2,
      path: '/profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav>
      <div className="rightNav">
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id} className="linkLi">
            <NavLink
              to={link.path}
              className={(navData) => (navData.isActive ? 'active' : 'link')}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;