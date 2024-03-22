const superHeros = [
  {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
  {name: 'Apogee', powers: ['gravity control', 'fly']},
  {name: 'Blazestone', powers: ['control of fire', 'pyrokinesis']},
  {name: 'Frozone', powers: ['freeze water vapor', 'ice control']},
  {name: 'Mr. Incredible', powers: ['superhuman strength', 'durability']},
  {name: 'Elastigirl', powers: ['stretching']},
  {name: 'Violet Parr', powers: ['invisibility', 'force fields']},
  {name: 'Dash Parr', powers: ['superhuman speed']},
  {
    name: 'Jack-Jack Parr',
    powers: ['shape-shifting', 'teleportation', 'telekinesis', 'fly'],
  },
  {name: 'fly man', powers: ['fly']},
]

function getFlyingSuperHeros() {
  return superHeros.filter(hero => hero.powers.includes('fly'))
}

export {getFlyingSuperHeros}
