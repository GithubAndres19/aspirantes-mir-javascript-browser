// Obtener elementos del DOM
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const section = document.querySelector('section');

// Manejar el evento de enviar el formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const data = { name, email };
  localStorage.setItem('data', JSON.stringify(data));
  showData();
});

// Función para mostrar los datos guardados en localStorage
function showData() {
  const dataString = localStorage.getItem('data');
  if (dataString) {
    const data = JSON.parse(dataString);
    section.innerHTML = `
      <p>Hola, ${data.name}! Tu correo electrónico es ${data.email}.</p>
      <button class="delete-btn">Borrar</button>
    `;
  } else {
    section.innerHTML = `
      <p>No hay datos guardados.</p>
    `;
  }
  const deleteButton = document.querySelector('.delete-btn');
  deleteButton.addEventListener('click', deleteData);
}

// Función para borrar los datos guardados en localStorage
function deleteData() {
  localStorage.removeItem('data');
  section.innerHTML = `<p>No hay datos guardados.</p>`;
}

// Mostrar los datos guardados al cargar la página
showData();