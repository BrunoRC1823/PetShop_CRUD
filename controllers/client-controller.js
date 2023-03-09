import { clientesServices } from "../service/client-service.js";
const CrearNuevoFila = (nombre, email) => {
    const fila = document.createElement('tr');
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
        <ul class="table__button-control">
            <li>
                <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button">Eliminar</button>
            </li>
        </ul>
    </td>`
    fila.innerHTML = contenido;
    return fila;
}
const tabla = document.querySelector('[data-table]');

clientesServices.listaClientes().then((data) => {
    data.forEach((perfil) => {
        const nuevaFila = CrearNuevoFila(perfil.nombre, perfil.email);
        tabla.appendChild(nuevaFila);
    });
})
.catch((err) => alert(err));