//? Elenco degli studenti
const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grade: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grade: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grade: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grade: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grade: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grade: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grade: 84
    },

]


// Lista di studenti con voto superiore a 70
const gradeOver70List = students.filter((student) => student.grade > 70);
console.log(gradeOver70List);

// Lista di studenti che hanno un totale di voti superiore a 70 e id superiore a 120
const gradeOver70AndIdover120 = students.filter((student) => student.grade > 70 && student.id > 120);
console.log(gradeOver70AndIdover120);

// Stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
const nameBadgeList = students.map(({ name }) => name.toUpperCase());

console.log(nameBadgeList);

