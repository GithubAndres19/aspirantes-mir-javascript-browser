// Obtener elementos del DOM
const form = document.querySelector('form');
const input = document.querySelector('input');
const section = document.querySelector('.section');
const button = document.querySelector('button');

// Manejar el evento de enviar el formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = input.value;
  localStorage.setItem('name', name);
  showName();
});

// Función para mostrar el nombre guardado en localStorage
function showName() {
  const name = localStorage.getItem('name');
  if (name) {
    section.innerHTML = `
      <div id="data-section">
        <p>Hola, ${name}!</p>
        <button class="delete-btn">Borrar</button>
      </div>
    `;
  } else {
    section.innerHTML = `
      <div id="data-section">
        <p>No hay datos guardados.</p>
      </div>
    `;
  }
  const deleteButton = document.querySelector('.delete-btn');
  deleteButton.addEventListener('click', deleteName);
}

// Función para borrar el nombre guardado en localStorage
function deleteName() {
  localStorage.removeItem('name');
  showName();
}

// Mostrar el nombre guardado al cargar la página
showName();