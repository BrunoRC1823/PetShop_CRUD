import { clientesServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]');
formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    clientesServices.crearCliente(nombre, email).then((response) =>{
        window.location.href='/screens/registro_completado.html'
    }).catch((err) => alert(err));
});