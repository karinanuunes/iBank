export class Banco {
    clientes = [];
    proximoId = 1;
    cadastrarCliente(nome, saldoInicial) {
        const novoCliente = { id: this.proximoId++, nome, saldo: saldoInicial };
        this.clientes.push(novoCliente);
        console.log(`Cliente ${nome} foi cadastrado com sucesso.`);
    }
    consultarSaldo(clienteId) {
        const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
        if (clientes) {
            console.log(`Saldo do cliente ${clientes.id}: ${clientes.saldo}`);
            return clientes.saldo;
        }
        else {
            console.error(`Cliente com ID ${clienteId} não encontrado`);
            return -1;
        }
    }
    depositar(clienteId, valor) {
        const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
        if (clientes) {
            clientes.saldo += valor;
            console.log(`Depósito de ${valor} foi realizado para o cliente ${clientes.id}`);
        }
        else {
            console.error(`Cliente com ID ${clienteId} não encontrado. Depósito não realizado.`);
        }
    }
    sacar(clienteId, valor) {
        const clientes = this.clientes.find((cliente) => cliente.id === clienteId);
        if (clientes) {
            if (clientes.saldo >= valor) {
                clientes.saldo -= valor;
                console.log(`Saque de ${valor} foi realizado para o cliente ${clientes.id})`);
            }
            else {
                console.log(`Saldo insuficiente para o cliente ${clientes.id}`);
            }
        }
        else {
            console.error(`Cliente com ID ${clienteId} não encontrado. Saque não realizado.`);
        }
    }
}
