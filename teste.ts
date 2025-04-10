import { Cliente } from "../modelos/Clientes";
import { ContaCorrente } from "../modelos/contaCorrente";
import { ContaPoupanca } from "../modelos/contaPoupanca";

//Validação de renda para conta corrente
 function criarContaCorrente(numero: string, cliente: Cliente): ContaCorrente {
  if (cliente.renda < 500) {
    console.log("Cliente não possui renda maior que 500 Reais.");
  }
  return new ContaCorrente(numero, cliente);
}

//Criação de clientes e contas

const cliente1 = new Cliente("001", "João ", "Rua do Limoeiro, 123", "99999-9999", 600);
const cliente2 = new Cliente("002", "Maria", "Rua B, 456", "88888-8888", 300);

const contaCorrente = criarContaCorrente("001", cliente1); 
const contaPoupanca = new ContaPoupanca("001", cliente2, 9);

//Operações de depósito, saque e transferência entre contas
contaCorrente.depositar(500);
contaCorrente.transferir(100, contaPoupanca);

//validação da rentabilidade
contaPoupanca.calcularTaxa();

//verifica o saldo
console.log("Saldo da conta corrente:", contaCorrente.verificarSaldo()); 
console.log("Saldo da cnta poupança:", contaPoupanca.verificarSaldo()); 
