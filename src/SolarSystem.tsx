import exp from 'constants';
import React from 'react';
import Planet from './planet';
import { PlanetProps } from './planet';
class SolarSystem extends React.Component {


calculateAU(data: string | any[]){
    for (let i=0; i<data.length; i++){
        let aulong = data[i].distance / 149600000;
        let auShort = Math.round(aulong*10)/10;
        data[i].astronomicalUnit = auShort; 
    }
    return 0; 
}

calculateScaledDistance(data: string | any[]){
    for (let i=0; i<data.length; i++){
        let scaleModifier = 3; 
        let computerScaledModifier = 37; 
        data[i].scaledDistance = Math.log(data[i].astronomicalUnit)+3;
        data[i].computerScaledDistance = data[i].scaledDistance * 37; 
    }
    return 0; 
}
/*
calculateAU(planets);
calculateScaledDistance(planets);
function outputInformation(data){
    for (let i=0; i<data.length; i++){
        console.log('The planet\'s name is ' + data[i].name + ' and it is ' + data[i].distance + ' from the sun. It\'s astronomical unit is ' + data[i].astronomicalUnit + ' It\'s scaled distance for drawing is ' + data[i].scaledDistance + ' and the pixelized distance is ' + data[i].computerScaledDistance); 
    }
    return 0;
}
outputInformation(planets);
*/

render()
{
    let coolPlanets: PlanetProps[]=[
        {"name":"Mercury", "distance":57900000, "astronomicalUnit":0, "scaledDistance":0, "displayDistance":0},
        {"name":"Venus", "distance":108200000, "astronomicalUnit":0, "scaledDistance":0, "displayDistance":0},
        {"name":"Earth", "distance":149600000, "astronomicalUnit":0, "scaledDistance":0, "displayDistance":0},
        {"name":"Mars", "distance":227900000, "astronomicalUnit":0, "scaledDistance":0, "displayDistance":0},
        {"name":"Asteroid Belt", "distance":413800000, "astronomicalUnit":0, "scaledDistance":0, "displayDistance":0},
        {"name":"Jupiter", "distance":778600000, "astronomicalUnit":0, "scaledDistance":0, "displayDistance":0},
        {"name":"Saturn", "distance":1433000000, "astronomicalUnit":0, "scaledDistance":0, "displayDistance":0},
        {"name":"Uranus", "distance":2877000000, "astronomicalUnit":0, "scaledDistance":0, "displayDistance":0},
        {"name":"Neptune", "distance":4503000000, "astronomicalUnit":0, "scaledDistance":0, "displayDistance":0},
        {"name":"Pluto", "distance":5874000000, "astronomicalUnit":0, "scaledDistance":0, "displayDistance":0}
    ];

    let planetsList: React.ReactElement[]=[];
    coolPlanets.forEach((planet,index) => {
        planetsList.push(<Planet name ={planet.name} distance ={planet.distance}></Planet>)
    })
    return (
        <ul>
            {planetsList}
        </ul>
   /* {for (let i:number=0; i<coolPlanets.length, i++){
        <Planet name={coolPlanets[i].name}></Planet>*/
    )

    }

//  {coolPlanets.map(planet => <Planet name={planet.name}></Planet>)}

    
}

export default SolarSystem; 