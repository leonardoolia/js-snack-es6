//? Nome del tavolo  e la lista degli invitati in ordine di posto.
const tableName = 'Tavolo Vip';

const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

/* Risultato da ottenere
const guestList = [
    {
        tableName = '',
        guestName = '',
        place = 1
    }
]
*/

//? Svolgimento esercizio

const finalGuestList = [];

guests.forEach((guest, i) => {

    const guestList = {
        tableName,
        guestName: guest,
        place: ++i
    }

    finalGuestList.push(guestList);
});

console.log(finalGuestList)