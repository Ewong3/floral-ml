import React from 'react';

import { Switch } from 'react-router-dom';
import { getPages } from '../../helpers/navigation';

const Content = () => {
    return (
        <Switch>
            { getPages() }
        </Switch>
    );
}

export default Content;