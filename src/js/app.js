import Team from './team';

const playerOne = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const playerTwo = {
  name: 'Некромант',
  type: 'Necromancer',
  health: 30,
  level: 4,
  attack: 50,
  defence: 15,
};


const playersTeam = new Team(playerOne, playerTwo);
console.log(playersTeam);

const result = [];

for (const character of playersTeam) {
  arrResult.push(character);
}

console.log(result);
