import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Switch } from 'react-router-dom';
import { getPages } from '../../helpers/navigation';
import { menuWidth } from '../../constants/styles';

const useStyles = makeStyles(theme => ({
    content: {
        padding: theme.spacing(3),
        paddingLeft: menuWidth + 50,
    },
    toolbar: theme.mixins.toolbar,
}));

const Content = () => {
    const styles = useStyles();

    return (
        <main className={styles.content}>
            <div className={styles.toolbar}/>
            <Switch>
                { getPages() }
            </Switch>
        </main>
    );
}

export default Content;