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
    vacinado: true,
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
    vacinado: true,
    servicos: ['banho', 'aparar unhas'],
  },
];

// console.log(pet);

const listPet = () => {
  for (let i = 0; i < pets.length; i++) {
    console.log(pets[i].nome);
  }
};

listPet();
