import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import AppRoute from './AppRoute';

// Layouts
import LayoutPrincipal from '../layouts';

// Components
import Home from '../components/home';
import Proyects from '../components/proyects';

const BlurpleeApp = () =>
<Router>
    <Switch>
        <AppRoute path="/" exact component={Home} layout={LayoutPrincipal}></AppRoute>
        <AppRoute path="/proyects" exact component={Proyects} layout={LayoutPrincipal}></AppRoute>
    </Switch>
</Router>

export default BlurpleeApp;