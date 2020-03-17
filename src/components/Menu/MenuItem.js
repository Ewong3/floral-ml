import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { ListItemIcon, ListItemText, ListItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { itemInactiveColor, itemActiveColor } from '../../constants/styles';

const useStyles = makeStyles(theme => ({
    inactiveItem: {
        textDecoration: 'none',
        '& svg': { color: itemInactiveColor },
        '& span': { color: itemInactiveColor },        
    },
    activeItem: {
        '& svg': { color: itemActiveColor },
        '& span': { color: itemActiveColor },
    }
}));

const MenuItem = (props) => {
    const { text, icon, href } = props;
    const styles = useStyles();

    return (
        <NavLink
            to={href}
            className={styles.inactiveItem}
            activeClassName={styles.activeItem}
        >
            <ListItem>
                <ListItemIcon>
                    {
                        React.createElement( icon )
                    }
                </ListItemIcon>
                <ListItemText primary={text}/>
            </ListItem>
        </NavLink>
    );
}

export default MenuItem;