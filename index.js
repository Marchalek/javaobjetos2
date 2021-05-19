//imports
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js"
import {ContaSalario} from "./Conta/ContaSalario.js"
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const conta1= new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
const contaSalario = new ContaSalario(cliente1)

const diretor =  new Diretor("Ricardo", 2430, 12312312)
const gerente = new Gerente("José", 3200, 4413128291)

contaSalario.depositar(200)
contaSalario.sacar(100)
contaSalario.sacar(50)

conta1.depositar(500)
conta1.sacar(100)
conta1.sacar(100)

console.log(diretor)
console.log(gerente)