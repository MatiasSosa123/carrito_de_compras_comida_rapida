document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const emailInput = document.getElementById("email");
    const asuntoInput = document.getElementById("asunto");
    const mensajeInput = document.getElementById("mensaje");
    const submitButton = formulario.querySelector("[type='submit']");

    // Validar si todos los campos están llenos
    const validarFormulario = () => {
        if (
            emailInput.value.trim() &&
            asuntoInput.value.trim() &&
            mensajeInput.value.trim()
        ) {
            submitButton.disabled = false;
            submitButton.classList.remove("opacity-50");
        } else {
            submitButton.disabled = true;
            submitButton.classList.add("opacity-50");
        }
    };

    // Escuchar cambios en los campos
    emailInput.addEventListener("input", validarFormulario);
    asuntoInput.addEventListener("input", validarFormulario);
    mensajeInput.addEventListener("input", validarFormulario);

    // Enviar datos al hacer submit
    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); // Evitar que se recargue la página

        const datos = {
            email: emailInput.value,
            asunto: asuntoInput.value,
            mensaje: mensajeInput.value,
        };

        console.log("Datos enviados:", datos);

        // Simular envío con estado de carga
        submitButton.textContent = "Enviando...";
        submitButton.disabled = true;

        setTimeout(() => {
            alert("Email enviado con éxito");
            submitButton.textContent = "Enviar";
            validarFormulario();
        }, 2000);
    });
});