export class Funcionario{
    constructor (nome, salario, cpf){
        this._nome =  nome
        this._salario = salario
        this._cpf = cpf
    }

    //getters e setters
    get nome(){
        return this._nome
    }

    get salario(){
        return this._salario
    }

    get cpf(){
        return this._cpf
    }
}
