import React from 'react';

import styled from 'styled-components';
import { MenuItemProps, MenuItem } from '../menu-item/menu-item';

/* tslint:disable:no-empty-interface */
export interface SideMenuProps {
  children: any;
}

const StyledSideMenu = styled.div`
  height: 100vh;
  flex-flow: column;
  display: flex;
  background: #353535;
`;

export const SideMenu = (props: SideMenuProps) => {
  return (
    <StyledSideMenu>
      {props.children}
    </StyledSideMenu>
  );
};

export default SideMenu;
