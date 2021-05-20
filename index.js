//imports
import {Cliente} from "./Cliente.js"
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import {SistemaAutenticacao} from"./SistmaAutenticacao.js";

const diretor =  new Diretor("Rodrigo", 10000, 12312312)
const gerente = new Gerente("Ricardo", 5000, 4413128291)

diretor.cadastrarsenha("123456")
gerente.cadastrarsenha("123")

const cliente = new Cliente("Lais",  78945612379, "456")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(gerenteEstaLogado, diretorEstaLogado)

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456")

console.log(clienteEstaLogado)