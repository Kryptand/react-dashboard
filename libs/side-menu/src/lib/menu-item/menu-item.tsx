import React from 'react';
import { FaBeer } from 'react-icons/fa';
import styled from 'styled-components';

/* tslint:disable:no-empty-interface */
export interface MenuItemProps { 
    route: string;
    label: string;
    children?: any;
}

const StyledMenuItem = styled.a`
    color:blue;
    padding:4px;
    .icon{
       font-size: 35px;
       color: white;
       border: 1px solid grey;
    }
    .label{
        color:black;
    }

`;

export const MenuItem = (props: MenuItemProps) => {
    return <StyledMenuItem title={props.label} href={props.route}>
        <div class='icon'>
            {props.children}
        </div>
           </StyledMenuItem>;
       };

export default MenuItem;
