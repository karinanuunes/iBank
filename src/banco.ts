import { BancoInterface } from "./interfaces/bancoInterface";

export class Banco implements BancoInterface {
  private clientes: { id: number; nome: string; saldo: number }[] = [];
  private proximoId: number = 1;

  cadastrarCliente(nome: string, saldoInicial: number): void {
    const novoCliente = { id: this.proximoId++, nome, saldo: saldoInicial };
    this.clientes.push(novoCliente);
    console.log(`Cliente ${nome} foi cadastrado com sucesso.`);
  }

  consultarSaldo(clienteId: number): any {
    const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
    if (clientes) {
      console.log(`Saldo do cliente ${clientes.id}: ${clientes.saldo}`);
      return clientes.saldo;
    } else {
      console.error(`Cliente com ID ${clienteId} não encontrado`);
      return -1;
    }
  }

  depositar(clienteId: number, valor: number): void {
    const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
    if (clientes) {
      clientes.saldo += valor;
      console.log(
        `Depósito de ${valor} foi realizado para o cliente ${clientes.id}`
      );
    } else {
      console.error(
        `Cliente com ID ${clienteId} não encontrado. Depósito não realizado.`
      );
    }
  }

  sacar(clienteId: number, valor: number): void {
    const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
    if (clientes) {
      if (clientes.saldo >= valor) {
        clientes.saldo -= valor;
        console.log(
          `Saque de ${valor} foi realizado para o cliente ${clientes.id})`
        );
      } else {
        console.log(`Saldo insuficiente para o cliente ${clientes.id}`);
      }
    } else {
      console.error(
        `Cliente com ID ${clienteId} não encontrado. Saque não realizado.`
      );
    }
  }
}
