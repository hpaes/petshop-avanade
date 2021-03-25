var moment = require('moment');

const nomePetshop = 'PETSHOP AVANADE';

let pets = [
  {
    nome: 'Caramelo',
    tipo: 'gato',
    idade: 7,
    raca: 'SRD',
    peso: 5.8,
    contato: '(81) 98888-4241',
    tutor: 'Beto',
    vacinado: false,
    servicos: [],
  },
  {
    nome: 'Joaquim',
    tipo: 'cão',
    idade: 10,
    raca: 'SRD',
    peso: 16,
    contato: '(81) 94123-4151',
    tutor: 'José',
    vacinado: false,
    servicos: [],
  },
];

// console.log(pet);

const listPet = () => {
  // for (let i = 0; i < pets.length; i++) {
  // console.log(pets[i].nome);
  // console.log(`O nome do pet é ${pets[i].nome}`);
  // }
  for (let pet of pets) {
    console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
  }
};

const vacinarPet = (animal) => {
  for (let pet of pets) {
    if (pet.nome === animal) {
      if (pet.vacinado === false) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso`);
      } else {
        console.log(`Ops, ${pet.nome} já estava vacinado.`);
      }
    }
  }
};

const campanhaVacina = () => {
  var petsVacinados = 0;
  for (let pet of pets) {
    if (pet.vacinado !== true) {
      petsVacinados++;
    }
    vacinarPet(pet);
  }
  console.log(`Foram vacinados ${petsVacinados} na campanha de vacinação`);
};

const addClient = (
  nome,
  tipo,
  idade,
  raca,
  peso,
  tutor,
  contato,
  vacinado,
  servicos
) => {
  pets.push = {
    nome: nome,
    tipo: tipo,
    idade: idade,
    raca: raca,
    peso: peso,
    tutor: tutor,
    contato: contato,
    vacinado: vacinado,
    servicos: servicos,
  };
  console.log(pets);
};

new Date();

const darBanhoPet = (nome) => {
  for (let pet of pets) {
    if (pet.nome === nome) {
      pet.servicos.push('banho');
      console.log(`${pet.nome} está de banho tomado`);
      console.log(
        `Serviço realizado na data: ${moment().locale('pt').format('dddd, hA')}`
      );
    }
  }
};

const tosarPet = (nome) => {
  for (let pet of pets) {
    if (pet.nome === nome) {
      pet.servicos.push('tosa');
      console.log(`${pet.nome} está com o cabelinho na régua`);
      console.log(
        `Serviço realizado na data: ${moment().locale('pt').format('dddd, hA')}`
      );
    }
  }
};

const apararUnhasPet = (nome) => {
  for (let pet of pets) {
    if (pet.nome === nome) {
      pet.servicos.push('corte de unhas');
      console.log(`${pet.nome} está de unhas aparadas`);
      console.log(
        `Serviço realizado na data: ${moment().locale('pt').format('dddd, hA')}`
      );
    }
  }
};
// listPet();
// vacinarPet('Caramelo');
// campanhaVacina();
// addClient('Rex', 'Cão', 20, 'SRD', 25, 'João', '81 9999-4444', false, [
//   'banho',
//   'tosa',
// ]);

darBanhoPet('Caramelo');
tosarPet('Caramelo');
apararUnhasPet('Caramelo');
