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
    bancoDados.pets.forEach((pet) => {
        let { nome, idade, tipo, raca, vacinado } = pet;
        console.log(
            `${nome}, ${idade}, ${tipo}, ${raca}, ${
                vacinado ? "vacinado" : "não vacinado"
            }`
        );

        for (const servico of pet.servicos) {
            console.log(`${servico.data} - ${servico.nome}`);
        }
    });
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

    bancoDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petsVacinados++;
        }
        return pet;
    });

    console.log(
        `Foram vacinados ${petsVacinados} pets na campanha de vacinação`
    );
};

const adicionarPet = (novoPet) => {
    bancoDados.pets.push(...novoPet);
    atualizarBanco();
    novoPet.forEach((pet) => {
        console.log(`${pet.nome} foi adicionado com sucesso.`);
    });
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

const buscarPet = (nomePet) => {
    let foundPet = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });
    return foundPet
        ? foundPet
        : `Desculpe, ${nomePet} não foi encontrado no sistema`;
};

const filtarPet = (petEspecie) => {
    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.especie == petEspecie;
    });

    return petsEncontrados;
};

const clientePremium = (pet) => {
    let { nome } = pet;
    let nServicos = pet.servicos.length;

    if (nServicos > 5) {
        console.log(
            `Olá, ${nome}! Você é um cliente especial e ganhou um descontão!`
        );
    } else {
        console.log(`Olá, ${nome}! Você ainda não tem descontos disponiveis!`);
    }
};

const contatoTutor = (pet) => {
    let { nome, tutor, contato } = pet;

    return `Tutor: ${tutor}
            Contato: ${contato}
            Pet: ${nome}`;
};

const filtrarTutor = (nomeTutor) => {
    let petsTutor = bancoDados.pets.filter((pet) => {
        return pet.tutor == nomeTutor;
    });

    console.log(`Pets do tutor ${nomeTutor}:`);
    petsTutor.forEach((pet) => {
        console.log(`${pet.nome} - ${pet.tipo}`);
    });
};

// filtrarTutor("José");
// console.log(contatoTutor(bancoDados.pets[0]));
// listPet();
adicionarPet([
    {
        nome: "Josefa",
        tipo: "Cachorro",
        idade: 1,
        raca: "Vira-lata",
        peso: 18,
        contato: "(81) 98288-4241",
        tutor: "José",
        vacinado: true,
        servicos: [],
    },
    {
        nome: "Jacinta",
        tipo: "Cachorro",
        idade: 1,
        raca: "Vira-lata",
        peso: 18,
        contato: "(81) 98288-4241",
        tutor: "José",
        vacinado: true,
        servicos: [],
    },
]);

// darBanhoPet(bancoDados.pets[0]);

// vacinarPet(bancoDados.pets[0]);
// listPet();

// atenderCliente(bancoDados.pets[0], apararUnhasPet);
// campanhaVacina();
// console.log(buscarPet("Caramelo"));
// console.log(filtarPet("canis lupus familiaris"));
