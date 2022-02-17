import React from 'react';

import '../styling/beer_containers.css';

export default function BeerGrid() {
    return (
        <div className='grid-container'>
            <div className='item'>Beer 1</div>
            <div className='item'>Beer 2</div>
            <div className='item'>Beer 3</div>
            <div className='item'>Beer 4</div>
            <div className='item'>Beer 5</div>
        </div>
    )
}