import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import windowDimensions from './components/screen-sizing';
import BeerGrid from './components/beer_containers';

function App() {
    return (
        <div>
            {/*<windowDimensions />*/}
            <BeerGrid />
        </div>
    )
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);