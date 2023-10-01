import React from 'react';
import styled from "styled-components";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index)=>{
                    return( <li key={index}>
                        <a href="src/layout/sections/works/menu">{item}</a>
                    </li>
                    )
                })}

            </ul>

        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

`
