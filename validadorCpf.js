function validarCPF(cpf) {
  // Remover pontos e traços do CPF
  cpf = cpf.replace(/[^\d]/g, '');

  // Verificar se o CPF tem 11 caracteres numéricos
  if (cpf.length !== 11) {
    return false;
  }

  // Verificar se todos os dígitos do CPF são iguais
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  // Validar o primeiro dígito verificador
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let digit = 11 - (sum % 11);
  if (digit > 9) {
    digit = 0;
  }
  if (digit !== parseInt(cpf.charAt(9))) {
    return false;
  }

  // Validar o segundo dígito verificador
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  digit = 11 - (sum % 11);
  if (digit > 9) {
    digit = 0;
  }
  if (digit !== parseInt(cpf.charAt(10))) {
    return false;
  }

  // CPF válido
  return true;
}

// Adicionar evento de clique ao botão de validação
const validarBtn = document.getElementById("validar-btn");
validarBtn.addEventListener("click", function() {
  const cpfInput = document.getElementById("cpf-input");
  const resultado = document.getElementById("resultado");

  if (validarCPF(cpfInput.value)) {
    resultado.innerText = "CPF válido";
    resultado.style.color = "green";
  } else {
    resultado.innerText = "CPF inválido";
    resultado.style.color = "red";
  }
});
