import React from "react";
import './setupStyles.scss';
import Canvas from './parts/canvas/Canvas';
import Header from './parts/header/Header';
import Home from './pages/home/Home';

function App() {
    return <>
        <Home />
        <Header />
        <Canvas>
        </Canvas >
    </>;
};

export default App;
