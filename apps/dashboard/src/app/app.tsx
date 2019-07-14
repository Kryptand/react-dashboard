import * as React from 'react';
import { SideMenu, MenuItem } from '@dashbordio/side-menu';
import './app.scss';
import { FaBeer, FaHome } from 'react-icons/fa';

export const App = () => (
  <div className="app">
    <SideMenu>
      <MenuItem route="home" label="home">
        <FaHome />
      </MenuItem>
      <MenuItem route="home" label="home">
        <FaHome />
      </MenuItem>
      <MenuItem route="home" label="home">
        <FaHome />
      </MenuItem>
      <MenuItem route="home" label="home">
        <FaHome />
      </MenuItem>
      <MenuItem route="home" label="home">
        <FaHome />
      </MenuItem>
      <MenuItem route="home" label="home">
        <FaHome />
      </MenuItem>
      <MenuItem route="home" label="home">
        <FaHome />
      </MenuItem>
    </SideMenu>
  </div>
);
