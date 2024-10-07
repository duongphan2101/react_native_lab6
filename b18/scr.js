const dogs = [
    {weight: 22, curFood: 250, owners: ["Alice", "Bob"]},
    {weight: 8, curFood: 200, owners: ["Matilda"]},
    {weight: 13, curFood: 275, owners: ["Sarah", "John"]},
    {weight: 32, curFood: 340, owners: ["Michale"]},
];
dogs.forEach((dog) => {
    dog.recommendedFood = dog.weight * 0.75 * 28;
});

const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
document.write(
    `Sarah's dog is eating ${
        sarahsDog.curFood > sarahsDog.recommendedFood ? "too much" : "too little"
    } <br>`
);

const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood)
    .flatMap((dog) => dog.owners);
const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recommendedFood)
    .flatMap((dog) => dog.owners);

document.write(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much! <br>`);
document.write(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!<br>`);

document.write(
    `Is any dog eating exactly the recommended amount of food? ${dogs.some((dog) => dog.curFood === dog.recommendedFood)} <br>`
);

const isEatingOkay = (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
document.write(`Is any dog eating an OKAY amount of food? ${dogs.some(isEatingOkay)} <br>`);

const dogEatingOkay = dogs.filter(isEatingOkay);
document.write(`Dogs eating an okay amount of food: ${JSON.stringify(dogEatingOkay)} <br>`);
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
document.write(`Dogs sorted by recommended food: ${JSON.stringify(dogsSorted)} <br>`);
