import { Contas } from "./Contas";

export class ContaCorrente extends Contas {
  //if(this.Conta.cliente.renda>=500){
  private chequeEspecial = 100 + this.saldo;

  sacar(valor: number): void {
    if (this.saldo + this.chequeEspecial >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Limite de saque excedido.");
    }
  }
  // }else{
  // console.log("Voce nao pode criar uma conta com renda menor de 500")
}

