import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import { contentBackgroundColor } from './constants/styles';

const useStyles = makeStyles(theme => ({
    app: {
        backgroundColor: contentBackgroundColor,
    },
}));

const App = () => {
    const styles = useStyles();

    return (
        <div className="App">
            <header className={`${styles.app} App-header`}>
                <BrowserRouter>
                    <Header/>
                    <Menu/>
                    <Content/>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
