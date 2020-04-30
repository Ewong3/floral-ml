import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { headerColor } from '../../constants/styles';

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: headerColor,
    },
  })
);

  const Header = () => {
      const styles = useStyles();

      return (
        <AppBar position="fixed" className={styles.appBar}>
            <Toolbar>
                Floral-ML
            </Toolbar>
        </AppBar>
    );
}

export default Header;