/*
para agarra el item
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');
*/

const User = (nameInput,emailInput) =>{
    localStorage.setItem('name', nameInput);
    localStorage.setItem('email', emailInput);
}

const topic = (topics=[]) =>{
    localStorage.setItem('miArray', JSON.stringify(topics));
}





