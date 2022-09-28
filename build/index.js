"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
;
;
;
//class
class pessoaFisica {
    constructor(nome, CPF) {
        this.CPF = CPF;
        this.nome = nome;
        this.CPF = CPF;
    }
    corrigeNome(nome) {
        this.nome = nome;
    }
}
;
class pessoaJuridica {
    // CNPJ:string;
    constructor(RazaoSocial, CNPJ) {
        this.CNPJ = CNPJ;
        this.RazaoSocial = RazaoSocial;
        this.CNPJ = CNPJ;
    }
    corrigeRs(RazaoSocial) {
        this.RazaoSocial = RazaoSocial;
    }
}
;
class clienteGeral {
    constructor(endereco, limite_inicial, observacoes) {
        this.endereco = endereco;
        this.limite_inicial = limite_inicial;
        this.observacoes = observacoes;
    }
    mudaEndereco(endereco) {
        this.endereco = endereco;
    }
    mudaLimite(limite) {
        this.limite_inicial = limite;
    }
    mudaObservacao(observacoes) {
        this.observacoes = observacoes;
    }
}
;
const clienteDados = new clienteGeral("bhksadbkjb", "rua direita", "kjkjnkjnkn");
//criar
class cadastraPf extends clienteGeral {
    constructor(nome, CPF, endereco, limite_inicial, observacoes) {
        super(endereco, limite_inicial, observacoes);
        this.nome = nome;
        this.CPF = CPF;
    }
}
const bancoPf = new cadastraPf("Marcos", "51651651654", "rua direita", "rua direita", "observacao");
bancoPf.mudaEndereco("rua Esquerda");
// console.log(bancoPf);
class cadastraPj extends clienteGeral {
    constructor(RazaoSocial, CNPJ, endereco, limite_inicial, observacoes) {
        super(endereco, limite_inicial, observacoes);
        this.RazaoSocial = RazaoSocial;
        this.CNPJ = CNPJ;
    }
}
const bancoPj = new cadastraPj("Mover", "51651651654", "rua direita", "rua direita", "observacao");
bancoPj.mudaEndereco("rua Esquerda");
// console.log(bancoPj);
//readline
const criaCliente = () => {
    console.log("Olá, seja bem vindo ao Banco Borges.");
    console.log("Selecione a opção desejada para cadastrar o cliente:");
    const escolhe = readline.question("Qual o tipo de cliente? \n 1- PF \n ou 2 -PJ?");
    var cliente = { cadastraPf };
    if (escolhe == "1") {
        bancoPf.CPF = readline.question("Digite o CPF: ");
        bancoPf.nome = readline.question("Nome do cliente: ");
    }
    else {
        bancoPj.CNPJ = readline.question("Digite o CNPJ: ");
        bancoPj.RazaoSocial = readline.question("Digite a Razao social: ");
    }
    clienteDados.endereco = readline.question("Qual o endereço? ");
    clienteDados.limite_inicial = readline.question("Informe o limite calculado: ");
    clienteDados.observacoes = readline.question("Observações: ");
    let finaliza = new cadastraPf(bancoPf.nome, bancoPf.CPF, bancoPf.endereco, bancoPf.limite_inicial, bancoPf.observacoes);
    if (finaliza) {
        console.log(finaliza);
    }
    else {
        console.log("Ocorreu um erro ao cadastrar o cliente.");
    }
};
criaCliente();
