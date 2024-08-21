import { Celular } from "./CelularRepository"


export type Pessoa = {
    nome: string,
    cpf: number,
    datanascimento: number,
    contatos: {
        telefones: number[],
        email: string[]
    },
    celular: Celular
}

export function cadastrapessoa (parametros: Pessoa){
    console.log("Pessoa cadastrada no banco de dados...")
    console.log(" - - - - - - - - - - - - - - ")
}