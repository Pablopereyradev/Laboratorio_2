document.addEventListener('DOMContentLoaded', () => {
    // Código que actualiza los campos en la tabla
    function actualizarCampo(campoId, salidaId) {
      const campo = document.getElementById(campoId);
      const salida = document.getElementById(salidaId);
      campo.addEventListener('input', () => {
        salida.textContent = campo.type === 'checkbox' ? (campo.checked ? campo.value : '') : campo.value;
      });
    }
  
    // Llamadas para cada campo del formulario
    actualizarCampo('nombre', 'nombre-output');
    actualizarCampo('apellido', 'apellido-output');
    actualizarCampo('email', 'email-output');
    actualizarCampo('telefono', 'telefono-output');
    actualizarCampo('edad', 'edad-output');
    actualizarCampo('direccion', 'direccion-output');
    actualizarCampo('provincia', 'provincia-output');
    actualizarCampo('codigo_postal', 'codigo_postal-output');
    
    // Radios y checkboxes
    document.querySelectorAll('input[name="metodo_contacto"]').forEach(radio => {
      radio.addEventListener('change', () => {
        document.getElementById('metodo-contacto-output').textContent = radio.checked ? radio.value : '';
      });
    });
    
    document.querySelectorAll('input[name="suscripcion"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const seleccionados = Array.from(document.querySelectorAll('input[name="suscripcion"]:checked'))
          .map(checkbox => checkbox.value)
          .join(', ');
        document.getElementById('suscripcion-output').textContent = seleccionados;
      });
    });
    
    // "Leer más" botón en acerca de
    document.getElementById('leer-mas').addEventListener('click', () => {
      const cvCompleto = document.getElementById('cv-completo');
      const botonLeerMas = document.getElementById('leer-mas');
    
      if (cvCompleto.style.display === 'none') {
        cvCompleto.style.display = 'inline';
        botonLeerMas.textContent = 'Leer menos';
      } else {
        cvCompleto.style.display = 'none';
        botonLeerMas.textContent = 'Leer más';
      }
    });
  });

  document.getElementById('leer-mas').addEventListener('click', () => {
    console.log("Botón 'Leer más' clickeado"); // Esto debería aparecer en la consola al hacer clic
    const cvCompleto = document.getElementById('cv-completo');
    const botonLeerMas = document.getElementById('leer-mas');
  
    if (cvCompleto.style.display === 'none') {
      cvCompleto.style.display = 'inline';
      botonLeerMas.textContent = 'Leer menos';
    } else {
      cvCompleto.style.display = 'none';
      botonLeerMas.textContent = 'Leer más';
    }
  });