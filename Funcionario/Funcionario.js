export class Funcionario{
    constructor (nome, salario, cpf){
        this._nome =  nome
        this._salario = salario
        this._cpf = cpf

        this._bonificacao = 1
        this._senha;
    }

    //métodos
    cadastrarsenha(senha){
        this._senha = senha
    }

    autenticar(senha){
        return senha == this._senha;
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
