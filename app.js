// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista de amigos
let amigos = [];

// Obtener elementos del DOM
let listaDeAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');

// Función para agregar un amigo
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('El campo está vacío, debe escribir un nombre.');
    } else if (amigos.includes(nombreAmigo)) {
        alert('No repetir nombre, usar segundo nombre de ser necesario.');
    } else {
        amigos.push(nombreAmigo);
    }

    // Actualizar la lista de amigos y limpiar la caja de texto
    actualizarListaDeAmigos();
    limpiarCaja();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaDeAmigos() {
    listaDeAmigos.innerHTML = '';  // Limpiar la lista existente

    // Recorrer el array y agregar cada amigo como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        listaDeAmigos.appendChild(elemento);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega nombres antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteadoNombre = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    amigoSorteado.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteadoNombre}</strong>`;
}

// Función para limpiar la caja de entrada
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}



