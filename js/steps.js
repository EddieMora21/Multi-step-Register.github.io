
const steps = () =>{
// Lee el parámetro "step" de la URL
const urlParams = new URLSearchParams(window.location.search);
const step = urlParams.get('step');
    if (step) {
        // Actualiza el indicador de paso en función del valor de "step"
        const StepIndicator = document.getElementById("StepIndicator");
        StepIndicator.textContent = `Step ${step} of 3`;
    }
}

steps()