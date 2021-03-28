const moment = require("moment");
const nomePetshop = "PETSHOP AVANADE";
const fs = require("fs");

var petJSON = require("./DATABASE.json");

var pets = petJSON.pets;

const listPet = () => {
    for (let pet of pets) {
        console.log(
            `${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${
                pet.vacinado ? "vacinado" : "não vacinado"
            }`
        );

        for (const servico of pet.servicos) {
            console.log(`${servico.data} - ${servico.nome}`);
        }
    }
};

const vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso`);
    } else {
        console.log(`Ops, ${pet.nome} já estava vacinado.`);
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

const darBanhoPet = (pet) => {
    pet.servicos.push({
        nome: "aparar unhas",
        data: moment().format("DD-MM-YYYY"),
    });
    fs.writeFile("./DATABASE.json", JSON.stringify(pets), (err) => {
        if (err) {
            throw err;
        }
    });
    console.log(`${pet.nome} está de banho tomado`);
};

const tosarPet = (pet) => {
    pet.servicos.push({
        nome: "tosa",
        data: moment().format("DD-MM-YYYY"),
    });
    fs.writeFile("./DATABASE.json", JSON.stringify(pets), (err) => {
        if (err) {
            throw err;
        }
    });
    console.log(`${pet.nome} está com o cabelinho na régua`);
};

const apararUnhasPet = (pet) => {
    pet.servicos.push({
        nome: "aparar unhas",
        data: moment().format("DD-MM-YYYY"),
    });
    fs.writeFile("./DATABASE.json", JSON.stringify(pets), (err) => {
        if (err) {
            throw err;
        }
    });
    console.log(`${pet.nome} está de unhas aparadas`);
};

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    servico ? servico() : console.log("só vim dar uma olhadinha");
};

darBanhoPet(pets[0]);
tosarPet(pets[0]);
apararUnhasPet(pets[0]);
