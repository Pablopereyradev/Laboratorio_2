document.addEventListener('DOMContentLoaded', () => {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const inputNumero = document.getElementById('numero-input');
    const botonAdivinar = document.getElementById('adivinar-btn');
    const resultado = document.getElementById('resultado');
  
    botonAdivinar.addEventListener('click', () => {
      const intento = parseInt(inputNumero.value);
  
      if (isNaN(intento) || intento < 1 || intento > 100) {
        resultado.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        resultado.style.color = 'red';
      } else if (intento === numeroSecreto) {
        resultado.textContent = '¡Felicidades! Has adivinado el número secreto 🎉';
        resultado.style.color = 'green';
      } else if (intento < numeroSecreto) {
        resultado.textContent = 'El número secreto es mayor. ¡Inténtalo de nuevo!';
        resultado.style.color = 'blue';
      } else {
        resultado.textContent = 'El número secreto es menor. ¡Inténtalo de nuevo!';
        resultado.style.color = 'blue';
      }
    });
  });