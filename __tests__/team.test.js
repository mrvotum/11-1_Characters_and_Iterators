import Team from '../src/js/team';

test('Two payers in the team', () => {
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

  const inputTeam = new Team(playerOne, playerTwo);
  let result = [];
  const expected = [ // ожидает
    {
      name: 'Лучник',
      type: 'Bowman',
      attack: 40,
      health: 50,
      level: 1,
      defence: 10,
    }, {
      name: 'Некромант',
      type: 'Necromancer',
      attack: 50,
      health: 30,
      level: 4,
      defence: 15,
    },
  ];

  for (const character of inputTeam) {
    result.push(character);
  }

  const received = result; // получает
  expect(received).toEqual(expected); // сравнивает
});
