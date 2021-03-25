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
    servicos: ['banho', 'aparar unhas'],
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
    servicos: ['banho', 'aparar unhas'],
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

// listPet();
// vacinarPet('Caramelo');
campanhaVacina();
