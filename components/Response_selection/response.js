let correctas = 0;
let incorrectas = 0;

document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
    
    if (!respuestaSeleccionada) {
        alert("Por favor selecciona una opción.");
        return;
    }

    if (respuestaSeleccionada.value === "correcta") {
        correctas++;
    } else {
        incorrectas++;
    }

    document.getElementById('correctas').textContent = correctas;
    document.getElementById('incorrectas').textContent = incorrectas;

    // Aquí podrías cargar la siguiente pregunta
    alert("(Aquí iría la lógica para cargar la siguiente pregunta)");
});