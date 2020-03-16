import React from 'react';

import { ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
    const { text, href } = props;

    return (
        <NavLink to={href}>
            <ListItemText primary={text}/>
        </NavLink>
    );
}

export default MenuItem;