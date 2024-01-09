import { Banco } from "./banco.js";
const banco = new Banco();
function informacoesDoUsuario() {
    let nomeInput = document.getElementById("nome")
        .value;
    let saldoInput = parseInt(document.getElementById("saldo").value);
    let depositoInput = parseInt(document.getElementById("deposito").value);
    let saqueInput = parseInt(document.getElementById("saque").value);
    if (nomeInput && !isNaN(saldoInput)) {
        banco.cadastrarCliente(nomeInput, saldoInput);
        if (!isNaN(depositoInput)) {
            banco.depositar(1, depositoInput);
            if (!isNaN(saqueInput)) {
                banco.sacar(1, saqueInput);
                document.getElementById("extrato").innerHTML = `<p class="fw-medium text-center">Saldo do cliente ${nomeInput} é de R$${banco.consultarSaldo(1)}</p>`;
            }
            else {
                alert("Valor de saque inválido");
            }
        }
        else {
            alert("Valor do depósito inválido");
        }
    }
    else {
        alert("Dados inválidos");
    }
}
function limparInputs() {
    let nomeInput = document.getElementById("nome");
    let saldoInput = document.getElementById("saldo");
    let depositoInput = document.getElementById("deposito");
    let saqueInput = document.getElementById("saque");
    if (nomeInput)
        nomeInput.value = "";
    if (saldoInput)
        saldoInput.value = "";
    if (depositoInput)
        depositoInput.value = "";
    if (saqueInput)
        saqueInput.value = "";
}
document
    .getElementById("btn-submit")
    .addEventListener("click", informacoesDoUsuario);
document.getElementById("btn-limpar").addEventListener("click", limparInputs);
