import { Banco } from "./banco";
import * as prompt from "prompt";
prompt.start();
const banco = new Banco();
const contrato = {
    propriedades: {
        idCliente: {
            description: "Digite o ID do cliente",
            type: "number",
            required: true,
        },
        saldoInicial: {
            description: "Digite o saldo inicial do cliente",
            type: "number",
            required: true,
        },
        valorDeposito: {
            description: "Digite o valor que será depositado",
            type: "number",
            required: true,
        },
        valorSaque: {
            description: "Digite o valor que será sacado",
            type: "number",
            required: true,
        },
    },
};
prompt.get(contrato, (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    const idCliente = result.idCliente;
    const saldoInicial = parseFloat(result.saldoInicial);
    const valorDeposito = parseFloat(result.valorDeposito);
    const valorSaque = parseFloat(result.valorSaque);
    if (idCliente && !isNaN(saldoInicial)) {
        banco.cadastrarCliente(idCliente, saldoInicial);
        if (!isNaN(valorDeposito)) {
            banco.depositar(idCliente, valorDeposito);
            if (!isNaN(valorSaque)) {
                banco.sacar(idCliente, valorSaque);
                banco.consultarSaldo(idCliente);
            }
            else {
                console.log("Valor do saque inválido");
            }
        }
        else {
            console.log("Valor do depósito inválido");
        }
    }
    else {
        console.log("Por favor, forneça as informações corretas sobre o cliente");
    }
});
