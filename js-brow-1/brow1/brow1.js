const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');
const resultadoMayusculas = document.querySelector('#resultadoMayusculas');
const btnConvertir = document.querySelector('.btn');

input.addEventListener('input', function() {
  const texto = input.value.toUpperCase();
  resultado.textContent = texto;
});

btnConvertir.addEventListener('click', function() {
  const texto = input.value.toUpperCase();
  resultadoMayusculas.textContent = texto;
});