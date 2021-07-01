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

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

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
