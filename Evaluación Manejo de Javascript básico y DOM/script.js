document. getElementById('formusuario').addEventListener('submit', function(e) {
    e.preventDefault();
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var telefono = document.getElementById('telefono');

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var regexTelefono = /^[0-9]{4}-?[0-9]{4}$/;
  
    if (!nombre || nombre.length > 20) {
      mostrarMensajeError('El nombre es obligatorio y debe tener máximo 20 caracteres.');
    } else if (!regexEmail.test(email)) {
      mostrarMensajeError('El correo electrónico no es válido.');
    } else if (!regexTelefono.test(telefono)) {
      mostrarMensajeError('El número de teléfono no es válido. Debe tener el formato 1234-5678.');
    } else {
      mostrarMensajeConfirmacion('Formulario enviado correctamente.');
      agregarUsuarioLista(nombre, email, telefono);
      limpiarFormulario();
    }


  addUserToList(nombre, email, telefono);

  document.getElementById('formusuario').reset();



});
function addUserToList(nombre, email, telefono) {
    const listaUsuarios = document.getElementById('listaUsuarios');
    const usuarioItem = document.createElement('li');
    usuarioItem.textContent = `${nombre}, ${email}, ${telefono}`;
    listaUsuarios.appendChild(usuarioItem);
  }