/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
nome sarà l’unica proprietà da inventare voi, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console */

const teams = [
    {
        name: 'Juventus',
        points: 0,
        foults: 0
    },
    {
        name: 'Milan',
        points: 0,
        foults: 0
    },
    {
        name: 'Inter',
        points: 0,
        foults: 0
    }
]

const getRandomNumbers = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

teams.forEach(team => {
    team.points = getRandomNumbers(0, 50);
    team.foults = getRandomNumbers(0, 10)
});

console.log(teams)

const newArray = teams.map((team) => {
    const { name, foults } = team;
    return { name, foults }
})

console.log(newArray)