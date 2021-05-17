export class Conta {
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //metódos da classee
    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor
        }
        else {
            console.log("Não foi realizado o saquei devido a saldo insuficiente")
        }
    }
    
    depositar(valor){
        if (valor<=100) return;
            this._saldo += valor;
        }
       
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}