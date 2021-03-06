let heroes = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];

const returnWithDelay = (result) => new Promise(resolve => setTimeout(() => resolve(result), 200));

const listHeroes = () => returnWithDelay(heroes);

const getHeroesByName = (name) => returnWithDelay(heroes.filter(hero => hero.name.toLowerCase().includes(name.toLowerCase())));

const getHero = (id) => returnWithDelay(heroes.find(hero => hero.id === id));

const createHero = (newHero) => {
  if (!newHero.id) {
    newHero.id = heroes[heroes.length-1].id + 1;
  }
  heroes.push(newHero);
   return returnWithDelay(newHero);
};

const updateHero = (modifiedHero) => {
  heroes = heroes.map(hero => hero.id === modifiedHero.id ? modifiedHero : hero);
  return returnWithDelay(modifiedHero);
}

const deleteHero = (id) => {
  heroes = heroes.filter(hero => hero.id !== id);
  return returnWithDelay();
}

module.exports = {
  listHeroes,
  getHeroesByName,
  getHero,
  createHero,
  updateHero,
  deleteHero
};