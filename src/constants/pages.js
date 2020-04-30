import React from 'react';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import Home from '../containers/Home';
import Discover from '../containers/Discover';
import Encyclopedia from '../containers/Encyclopedia';

const pages = [
    { path: '/home', component: <Home/>, text: 'Home', icon: HomeOutlinedIcon },
    { path: '/discover', component: <Discover/>, text: 'Discover', icon: SearchOutlinedIcon },
    { path: '/encyclopedia', component: <Encyclopedia/>, text: 'Encyclopedia', icon: PublicOutlinedIcon },
    { path: '/', component: <Home/> },
];

export default pages;