import { Banco } from "./banco.js";
const banco = new Banco();

function informacoesDoUsuario() {
  let nomeInput: string = (document.getElementById("nome") as HTMLInputElement)
    .value;
  let saldoInput: number = parseInt(
    (document.getElementById("saldo") as HTMLInputElement).value
  );
  let depositoInput: number = parseInt(
    (document.getElementById("deposito") as HTMLInputElement).value
  );
  let saqueInput: number = parseInt(
    (document.getElementById("saque") as HTMLInputElement).value
  );

  if (nomeInput && !isNaN(saldoInput)) {
    banco.cadastrarCliente(nomeInput, saldoInput);
    if (!isNaN(depositoInput)) {
      banco.depositar(1, depositoInput);
      if (!isNaN(saqueInput)) {
        banco.sacar(1, saqueInput);
        document.getElementById(
          "extrato"
        ).innerHTML = `<p class="fw-medium text-center">Saldo do cliente ${nomeInput} é de R$${banco.consultarSaldo(
          1
        )}</p>`;
      } else {
        alert("Valor de saque inválido");
      }
    } else {
      alert("Valor do depósito inválido");
    }
  } else {
    alert("Dados inválidos");
  }
}

function limparInputs() {
  let nomeInput = document.getElementById("nome") as HTMLInputElement | null;
  let saldoInput = document.getElementById("saldo") as HTMLInputElement | null;
  let depositoInput = document.getElementById(
    "deposito"
  ) as HTMLInputElement | null;
  let saqueInput = document.getElementById("saque") as HTMLInputElement | null;
  if (nomeInput) nomeInput.value = "";
  if (saldoInput) saldoInput.value = "";
  if (depositoInput) depositoInput.value = "";
  if (saqueInput) saqueInput.value = "";
  document.getElementById("extrato").style.display = "none";
}

document
  .getElementById("btn-submit")
  .addEventListener("click", informacoesDoUsuario);
document.getElementById("btn-limpar").addEventListener("click", limparInputs);
