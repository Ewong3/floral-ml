import React from 'react';

import { Route } from 'react-router-dom';
import MenuItem from '../components/Menu/MenuItem';
import pages from "../constants/pages";

const getMenuNavigation = () => {
    return pages.map((page) => {
        return (
            <MenuItem text={page.text} icon={page.icon} href={page.path}/>
        );
    });
}

const getPages = () => {
    return pages.map((page) => {
        return (
            <Route key={`nav-${page.path}`} path={page.path}>
                { page.component }
            </Route>
        );
    })
}

export {
    getMenuNavigation,
    getPages,
};