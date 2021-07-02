const data = require('./data');

function getSpeciesByIds(...ids) {
  const especiesBuscadas = [];
  ids.forEach((id) => {
    especiesBuscadas.push(data.species.find((especie) => especie.id === id));
  });
  return especiesBuscadas;
}

function getAnimalsOlderThan(animal, age) {
  const animalSelecionado = data.species.find((especie) => especie.name === animal);
  return animalSelecionado.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((employee) => {
    const nome1 = employee.firstName;
    const nome2 = employee.lastName;
    return nome1 === employeeName || nome2 === employeeName;
  });
}

function createEmployee(personalInfo, associatedWith) {
  const employeeCriated = {};
  return Object.assign(employeeCriated, personalInfo, associatedWith);
}

function isManager(id) {
  const arrayManagers = [];
  data.employees.forEach((colab) => {
    const man = colab.managers;
    arrayManagers.push(...man);
  });
  return arrayManagers.some((manager) => manager === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    },
  );
}

function countAnimals(species) {
  if (species === undefined) {
    const obj = {};
    data.species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  const specieSelect = data.species.find((specie) => specie.name === species);
  return specieSelect.residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  const p = data.prices;
  const total = (Adult * p.Adult) + (Child * p.Child) + (Senior * p.Senior);
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
}

const arrayCron = Object.entries(data.hours);
const cronogramaRet = {};
arrayCron.map((day) => {
  if (day[0] === 'Monday') {
    return Object.assign(cronogramaRet, { [day[0]]: 'CLOSED' });
  }
  return Object.assign(cronogramaRet, {
    [day[0]]: `Open from ${day[1].open}am until ${day[1].close - 12}pm`,
  });
});

function getSchedule(dayName) {
  if (dayName === undefined) {
    return cronogramaRet;
  }
  const arrayHour = Object.entries(cronogramaRet);
  const achado = arrayHour.find((day) => day[0] === dayName);
  return { [achado[0]]: achado[1] };
}
/* console.log(getSchedule('Tuesday')); */

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
