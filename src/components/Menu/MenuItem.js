import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { ListItemIcon, ListItemText, ListItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { menuIconColor, menuTextColor } from '../../constants/styles';

const useStyles = makeStyles(theme => ({
    iconColor: {
        color: menuIconColor,
    },
    textColor: {
        color: menuTextColor,
    }
}));

const MenuItem = (props) => {
    const { text, icon, href } = props;
    const styles = useStyles();

    return (
        <NavLink to={href}>
            <ListItem>
                <ListItemIcon>
                    {
                        React.createElement( icon, { className: styles.iconColor } )
                    }
                </ListItemIcon>
                <ListItemText primary={text} className={styles.textColor}/>
            </ListItem>
        </NavLink>
    );
}

export default MenuItem;