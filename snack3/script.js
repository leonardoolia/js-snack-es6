/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e peso.
Stampare in console la bici con peso minore utilizzando il destructuring */

const bikes = [
    {
        name: 'Canyon Grail',
        weight: 25
    },
    {
        name: 'Focus Atlas',
        weight: 30
    },
    {
        name: 'Trek Madone',
        weight: 20
    },
    {
        name: 'Cannondale',
        weight: 35
    }
];


//? Soluzione 1
// let lightestBike = bikes[0];

// const lightestBikeSoFar = bikes.forEach((bike) => {
//     const { weight } = bike;
//     if (weight < lightestBike.weight) lightestBike = bike;
// });

// console.log(lightestBike)

//? Soluzione 2
const lightestBike = bikes.reduce((result, bike) => {
    if (bike.weight < result.weight) return bike;
    else return result
}, bikes[0])

console.log(lightestBike)