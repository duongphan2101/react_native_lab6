const game = {
    team1: "Bayern Munich",
    team2: "Borussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnabry",
            "Lewandowski"
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze"
        ]
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};
const printGoal = () => {
    let len = game.scored.length;
    for (let i = 0; i < len; i++) {
        const element = game.scored[i];
        document.write(`Goal ${i + 1}: ${element}<br>`);
    }
};
printGoal();

const odds = Object.values(game.odds);
const avgOdd = () => {
    let sum = 0;
    for (const odd of odds) {
        sum += odd;
    }
    return sum / odds.length;
};

document.write(`Average odd: ${avgOdd()}<br>`);
document.write(`Odd of victory ${game.team1}: ${game.odds.team1}<br>`);
document.write(`Odd of a draw: ${game.odds.x}<br>`);
document.write(`Odd of victory ${game.team2}: ${game.odds.team2}<br>`);

const scores = game.scored.reduce((acc, player) => {
    acc[player] = (acc[player] || 0) + 1;
    return acc;
}, {});

document.write(`Scores: ${JSON.stringify(scores)}<br>`);
