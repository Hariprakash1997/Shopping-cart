import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Pages/Homepage';
import Cartpage from './Pages/Cartpage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/cart' component={Cartpage} />
    </Switch>
)

export default Router;