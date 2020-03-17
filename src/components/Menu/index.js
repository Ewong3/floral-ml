import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List } from '@material-ui/core';
import { getMenuNavigation } from '../../helpers/navigation';
import { menuWidth, menuColor } from '../../constants/styles';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: menuWidth,
    },
    drawerPaper: {
        backgroundColor: menuColor,
        width: menuWidth,
    },
    toolbar: theme.mixins.toolbar,
}));

const Menu = () => {
    const styles = useStyles();

    return (
        <Drawer
            className={styles.drawer}
            classes={{
                paper: styles.drawerPaper,
            }}
            variant="permanent"
        >
            <div className={styles.toolbar}/>
            <List>
                { getMenuNavigation() }
            </List>

        </Drawer>
    );
}

export default Menu;