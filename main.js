let registros = [];

function captura() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;
    var edad = document.getElementById("edad").value;
    var genero = document.getElementById("genero").value;

    if (!nombre || !apellido || !telefono || !email || !direccion || !edad || !genero) 
    {
        alert("ERROR AL DIGITAR, completa los datos");
    } 
    else 
    {

        const nuevoRegistro = {
            nombre,
            apellido,
            telefono,
            email,
            direccion,
            edad,
            genero
        };

        registros.push(nuevoRegistro);

        const respuesta = document.getElementById("datosobtenidos");
        respuesta.innerHTML = `
            Nombre:      ${nombre}<br>
            Apellido:    ${apellido}<br>
            Teléfono:    ${telefono}<br>
            Email:       ${email}<br>
            Dirección:   ${direccion}<br>
            Edad:        ${edad}<br>
            Género:      ${genero}<br>
        `;

        const contador = document.getElementById("contador");
        contador.innerHTML = `Total de registros: ${registros.length}`;
        document.getElementById("registroForm").reset();
    }
}
