import * as React from 'react';

import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = React.useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as={Link}
        to="/"
      />
      <Menu.Item
        name="books"
        active={activeItem === 'books'}
        onClick={handleItemClick}
        as={Link}
        to="/books"
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="signup"
          active={activeItem === 'signup'}
          onClick={handleItemClick}
          as={Link}
          to="/signup"
        />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
};

export default MenuBar;
