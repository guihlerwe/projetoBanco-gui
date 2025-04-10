import { Contas } from "./Contas";

export class ContaPoupanca extends Contas {
  constructor(numero: string, cliente: any, public taxaJuros: number) {
    super(numero, cliente);
  }
  
//só precisa desse metódo pq nas contas há os outros e esse é um extra da poupança
  calcularTaxa(): void {
    
    const juros = this.saldo * this.taxaJuros;
    this.saldo += juros;
  }
}
