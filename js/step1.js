
document.addEventListener("DOMContentLoaded", function() {
    const myForm = document.getElementById("myForm");
    
    myForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario.
        const Name = document.getElementById("Name").value;
        const emailInput = document.getElementById("Email").value;
        // Verifica si todos los campos están completos antes de redirigir.
        if (myForm.checkValidity()) {
            User(Name,emailInput);
            window.location.href = "step2.html?step=2";
        }
    });

});
