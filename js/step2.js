
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkdiv = document.querySelectorAll('.check');
    const form = document.getElementById("myform-step2")
    checkboxes.forEach(function(checkbox, index) {
        checkbox.addEventListener("click", function() {
            if (checkbox.checked) {
                checkdiv[index].style.backgroundColor = "#714e91";
            } else {
                checkdiv[index].style.backgroundColor = "#606470";
            }
        });

        checkdiv[index].addEventListener("click",function(){
            if(checkbox.checked){
                checkbox.checked=false;
                checkdiv[index].style.backgroundColor="#606470"
            }else{
                checkbox.checked = true; 
                checkdiv[index].style.backgroundColor = "#714e91";
            }
        })
    });
    form.addEventListener("submit",function(event){
        event.preventDefault();

        const labels=[];

        // Verifica si al menos un checkbox está seleccionado
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                const label = document.querySelector(`label[for="${checkbox.id}"]`);
                if (label) {
                    labels.push(label.textContent);
                }
                
            }
        });
        if(labels.length===0){
            alert("Selecciona al menos una opción antes de continuar.")
            

        }else{
            if (form.checkValidity()) {
                topic(labels)
                window.location.href = "step3.html?step=3";
            }
        }
    })

    


    

});
