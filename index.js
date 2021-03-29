const moment = require("moment");
const fs = require("fs");

let bancoDados = fs.readFileSync("./DATABASE.json");

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    // conversão de objeto javascript para JSON
    let petsAtualizado = JSON.stringify(bancoDados);

    // atualização do arquivo bancoDados.json
    fs.writeFileSync("./DATABASE.json", petsAtualizado, "utf-8");
};

const listPet = () => {
    for (let pet of bancoDados.pets) {
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
    atualizarBanco();
};

const campanhaVacina = () => {
    var petsVacinados = 0;
    for (let pet of bancoDados.pet) {
        if (pet.vacinado !== true) {
            petsVacinados++;
        }
        vacinarPet(pet);
    }

    console.log(`Foram vacinados ${petsVacinados} na campanha de vacinação`);
};

const adicionarPet = (novoPet) => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso.`);
};

const darBanhoPet = (pet) => {
    pet.servicos.push({
        nome: "dar banho",
        data: moment().format("DD-MM-YYYY"),
    });
    atualizarBanco();
    console.log(`${pet.nome} está de banho tomado`);
};

const tosarPet = (pet) => {
    pet.servicos.push({
        nome: "tosa",
        data: moment().format("DD-MM-YYYY"),
    });
    atualizarBanco();
    console.log(`${pet.nome} está com o cabelinho na régua`);
};

const apararUnhasPet = (pet) => {
    pet.servicos.push({
        nome: "aparar unhas",
        data: moment().format("DD-MM-YYYY"),
    });
    atualizarBanco();
    console.log(`${pet.nome} está de unhas aparadas`);
};

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.tutor}, os serviços realizados foram:`);
    servico ? servico(pet) : console.log("só vim dar uma olhadinha");
    console.log("Volte sempre!");
};

// listPet();
// adicionarPet({
//     nome: "Maria",
//     tipo: "Cachorro",
//     idade: 1,
//     raca: "Vira-lata",
//     peso: 18,
//     contato: "(81) 98288-4241",
//     tutor: "José",
//     vacinado: true,
//     servicos: [],
// });

// darBanhoPet(bancoDados.pets[0]);

// vacinarPet(bancoDados.pets[0]);
// listPet();

atenderCliente(bancoDados.pets[0], apararUnhasPet);
