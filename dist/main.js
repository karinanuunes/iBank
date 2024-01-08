import { Banco } from "./banco.js";
const banco = new Banco();
function informacoesDoUsuario() {
    const btn = document.getElementById("btn-submit");
    let nomeInput = document.getElementById("nome");
    let saldoInput = document.getElementById("saldo");
    let depositoInput = document.getElementById("deposito");
    let saqueInput = document.getElementById("saque");
    btn.addEventListener("click", () => {
        const clienteId = 1;
        const nome = nomeInput?.value || "Anônimo";
        const saldo = parseFloat(saldoInput?.value || "0") || 0;
        const deposito = parseFloat(depositoInput?.value || "0") || 0;
        const saque = parseFloat(saqueInput?.value || "0") || 0;
        const userInfo = {
            nome: nome,
            saldo: saldo,
            deposito: deposito,
            saque: saque,
        };
        console.log(JSON.stringify(userInfo));
        banco.cadastrarCliente(nome, saldo);
        banco.consultarSaldo(clienteId);
        banco.depositar(clienteId, deposito);
        banco.sacar(clienteId, saque);
    });
}
informacoesDoUsuario();
