// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// declaramos un array
let amigos = [];

// creamos una funcion para agregar un amigo
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    } else {
        amigos.push(nombre);
        limpiarCasillas();
        listaDeAmigos();
    }

}

// funcion que usamos para sortear los amigos
function sortearAmigo() {
    amigoSecreto();
}

// funcion que permite limpiar las casillas
function limpiarCasillas() {
    document.getElementById("amigo").value = "";
}

// funcion que permite mostar la lista de los amigos
function listaDeAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }

    document.getElementById("listaAmigos").style.display = "block";
    document.getElementById("resultado").style.display = "none";

}

// funcion para selecionar el amigo secreto
function amigoSecreto() {
    if (amigos.length === 0) {
        alert("La lista de amigos no debe estar vacia, ingresa al menos 2 amigos a mas");
        return;
    } else {
        // obtnermos un indice aleatorio
        let aleatorio = Math.floor(Math.random() * amigos.length);
        // obtenemos el nombre del amigo secreto
        let amigoSorteado = amigos[aleatorio];

        document.getElementById("resultado").style.display = "block";
        document.getElementById("resultado").innerHTML = `El amigo secreto es ${amigoSorteado}`;
        document.getElementById("listaAmigos").style.display = "none";
    }
}

