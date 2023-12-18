import exp from 'constants';
import React from 'react';
import './planet.css';

type SurfaceType = 'rocky' | 'gas';

export interface PlanetProps{
    name:string;
    distance?:number; // in kilometers
    astronomicalUnit?:number; // distance / earth's distance
    scaledDistance?:number; // ln(au) + 3 cm = distance in cm
    displayDistance?:number;  // scaled Distance * whatever number to increase size on display, testing number was 37
    surfaceType?:SurfaceType; 

}

function Planet(props:PlanetProps)
{
    return (<div className='planet' style={}>{props.name}</div>
);

}
export default Planet; 