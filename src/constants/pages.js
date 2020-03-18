import React from 'react';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import Home from '../containers/Home';
import Encyclopedia from '../containers/Encyclopedia';

const pages = [
    { path: '/home', component: <Home/>, text: 'Home', icon: HomeOutlinedIcon },
    { path: '/discover', component: <p> Discover </p>, text: 'Discover', icon: SearchOutlinedIcon },
    { path: '/encyclopedia', component: <Encyclopedia/>, text: 'Encyclopedia', icon: PublicOutlinedIcon },
];

export default pages;