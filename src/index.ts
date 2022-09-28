// import { clientePfModel } from "./models/ClientePfModel";
import { log } from 'console';
import * as readline from 'readline-sync';

//Interface basica
interface cliente{
    endereco: string,
    limite_inicial:string,
    observacoes:string,
};

interface clientePf{
     nome:string,
};

interface clientePj{
    RazaoSocial:string,
};

//class
class pessoaFisica implements clientePf{

    nome: string;

    constructor(nome:string, protected CPF: string){
        this.nome = nome;
        this.CPF = CPF;
    }
    corrigeNome(nome:string){
        this.nome = nome
    }
};

class pessoaJuridica implements clientePj{
    RazaoSocial:string;
    // CNPJ:string;

    constructor(RazaoSocial:string, protected CNPJ:string){
        this.RazaoSocial = RazaoSocial;
        this.CNPJ = CNPJ;
    }
    corrigeRs(RazaoSocial:string){
        this.RazaoSocial =RazaoSocial;
    }
};

class clienteGeral implements cliente{
    endereco: string;
    limite_inicial:string;
    observacoes:string;

    constructor(endereco:string,limite_inicial:string, observacoes:string){
        this.endereco =endereco;
        this.limite_inicial =limite_inicial;
        this.observacoes =observacoes;
    }
    mudaEndereco(endereco:string){
        this.endereco =endereco;
    }
    mudaLimite(limite:string){
        this.limite_inicial =limite;
    }
    mudaObservacao(observacoes:string){
        this.observacoes =observacoes;
    }

    
};
const clienteDados = new clienteGeral("bhksadbkjb", "rua direita", "kjkjnkjnkn")

//criar
class cadastraPf extends clienteGeral  implements clientePf {
    nome: string;
    CPF: string;
    constructor(nome:string, CPF:string, endereco:string, limite_inicial:string, observacoes:string){
       super(endereco, limite_inicial, observacoes)
        this.nome = nome;
        this.CPF = CPF;

    }
}

const bancoPf = new cadastraPf("Marcos", "51651651654", "rua direita", "rua direita","observacao");

bancoPf.mudaEndereco("rua Esquerda");

// console.log(bancoPf);


class cadastraPj extends clienteGeral implements clientePj {
    RazaoSocial: string;
    CNPJ:string;

    constructor(RazaoSocial:string, CNPJ:string, endereco:string, limite_inicial:string, observacoes:string){
       super(endereco, limite_inicial, observacoes)
        this.RazaoSocial = RazaoSocial;
        this.CNPJ = CNPJ;

    }
}

const bancoPj = new cadastraPj("Mover", "51651651654", "rua direita", "rua direita","observacao");

bancoPj.mudaEndereco("rua Esquerda");

// console.log(bancoPj);


//readline

const criaCliente = () =>{
    console.log("Olá, seja bem vindo ao Banco Borges.");
    console.log("Selecione a opção desejada para cadastrar o cliente:");
    const escolhe = readline.question("Qual o tipo de cliente? \n 1- PF \n ou 2 -PJ?")
    var cliente:any = {cadastraPf}

    if(escolhe == "1"){
        bancoPf.CPF = readline.question("Digite o CPF: ");
        bancoPf.nome = readline.question("Nome do cliente: ");
    } else{
        bancoPj.CNPJ = readline.question("Digite o CNPJ: ");
        bancoPj.RazaoSocial = readline.question("Digite a Razao social: "); 
    }
    
    clienteDados.endereco = readline.question("Qual o endereço? ");
    clienteDados.limite_inicial = readline.question("Informe o limite calculado: ");
    clienteDados.observacoes = readline.question("Observações: ");

    let finaliza = new cadastraPf(bancoPf.nome, bancoPf.CPF,bancoPf.endereco, bancoPf.limite_inicial, bancoPf.observacoes);

    if(finaliza){
        console.log(finaliza);
    } else {
        console.log("Ocorreu um erro ao cadastrar o cliente.");
        
    }

}

criaCliente()
