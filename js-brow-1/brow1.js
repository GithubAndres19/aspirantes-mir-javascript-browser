const inputTexto = document.getElementById("texto")
  const resultado = document.getElementById("resultado")  
  inputTexto.addEventListener("input", () => {
    resultado.textContent = inputTexto.value.toUpperCase()})