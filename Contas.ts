import { IConta } from "../interfaces/Iconta";
import { ICliente } from "../interfaces/Icliente";

export abstract class Contas implements IConta {
  public saldo: number = 0;

  constructor(public numero: string, public cliente: ICliente) { }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }

  }

  //ta vendo se o valor é negativo
  transferir(valor: number, destino: Contas): void {
    if (valor > 0) {
      this.sacar(valor);
      destino.depositar(valor);
    } else {
      console.log("Erro pois não é possível transferir um valor negativo")
    }

  }

  verificarSaldo(): number {
    return this.saldo;
  }
}
