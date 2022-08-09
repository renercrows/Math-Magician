import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.PureComponent {
  render() {
    const links = [
      {
        id: 1,
        path: '/',
        text: 'Home',
      },
      {
        id: 2,
        path: '/calculator',
        text: 'Calculator',
      },
      {
        id: 3,
        path: '/quote',
        text: 'Quote',
      },
    ];

    return (
      <nav>
        <h1>Math Magicians</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-page" exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
