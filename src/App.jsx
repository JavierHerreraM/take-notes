import React from "react";
import { Switch, Route } from 'react-router-dom';
import './setupStyles.scss';
import Canvas from './parts/canvas/Canvas';
import Header from './parts/header/Header';
import Home from './pages/home/Home';

function App() {
    return <>
        <Header />
        <Canvas>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Canvas >
    </>;
};

export default App;
