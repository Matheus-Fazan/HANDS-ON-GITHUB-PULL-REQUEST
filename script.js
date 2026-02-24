document.addEventListener("DOMContentLoaded", () => {
  const pShowMessage = document.getElementById("show-message")
  const btn = document.getElementById("more-information")

  function sendMail() {
    const email = prompt("Informe seu email");
    (!email) ? pShowMessage.textContent = "Email não informado" : pShowMessage.textContent = `Email informado: ${email}`;
  }

  btn.addEventListener("click", sendMail)
})