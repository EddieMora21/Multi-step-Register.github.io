document.addEventListener("DOMContentLoaded", function(){
    const Name = document.getElementById("Name");
    const Email = document.getElementById("Email");
    const topics = document.querySelectorAll(".topic");
    const dots = document.querySelectorAll(".dot");
    const confirm= document.getElementById("confirm");

    const storedTopics = JSON.parse(localStorage.getItem('miArray')) || [];
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    Name.innerText = "Name: "+name || "No se encontró nombre";
    Email.innerText = "Email: "+email || "No se encontró email";
    for (let i = 0; i < topics.length; i++) {
        if (i < storedTopics.length) {
            if (storedTopics[i] !== "") {
                topics[i].innerHTML = storedTopics[i];
            } else {
                topics[i].innerHTML = "";
                dots[i].style.display="none";
            }
        } else {
            topics[i].innerHTML = "";
            dots[i].style.display="none";
        }
    }
    confirm.addEventListener("click", function(){
        alert("✅ Success")
        

    })


    



});
