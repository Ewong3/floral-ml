import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
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
