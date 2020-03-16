import React from 'react';

import { Drawer, List } from '@material-ui/core';
import { getMenuNavigation } from '../../helpers/navigation';

const Menu = () => {
    return (
        <Drawer
            variant="permanent"
        >
            <List>
                { getMenuNavigation() }
            </List>
        </Drawer>
    );
}

export default Menu;