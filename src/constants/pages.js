import React from 'react';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import Home from '../containers/Home';

const pages = [
    { path: '/home', component: <Home/>, text: 'Home', icon: HomeOutlinedIcon },
    { path: '/discover', component: <p> Discover </p>, text: 'Discover', icon: SearchOutlinedIcon },
    { path: '/roam', component: <p> Roam </p>, text: 'Roam', icon: PublicOutlinedIcon },
];

export default pages;