import React from "react";
import { Switch, Route } from 'react-router-dom';
import './setupStyles.scss';
import Canvas from './parts/canvas/Canvas';
import Header from './parts/header/Header';
import Home from './pages/home/Home';
import LogInSignUp from './pages/logInSignUp/LogInSignUp';

function App() {
    return <>
        <Header />
        <Canvas>
            <Switch>
                <Route path='/log-in' component={LogInSignUp} />
                <Route path='/sign-up' component={LogInSignUp} />
                <Route exact path='/' component={Home} />
            </Switch>
        </Canvas >
    </>;
};

export default App;
