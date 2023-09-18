
const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
// const heroesCopy = heroes;

// const sortedHeroes = heroes.toSorted();
// const reversedHeroes = heroes.toReversed();

const deletedHeroes = heroes.toSpliced(0, 2, 'Maradona');



console.table(heroes);
console.table({deletedHeroes});
// console.table(sortedHeroes);
// console.table(reversedHeroes);