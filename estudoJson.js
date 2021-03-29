let bancoDados = require("./pets.json");

let pets = bancoDados.pets;

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);

    servico ? servico() : console.log("só vim dar uma olhadinha");
};

const darBanho = () => {
    console.log("dando banho no pet...");
};

const apararUnhas = () => {
    console.log("aparando unhas do pet...");
};

atenderCliente(pets[0], darBanho);
console.log("--------");
atenderCliente(pets[2], apararUnhas);
console.log("--------");
atenderCliente(pets[1]);
