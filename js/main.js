// ARRAY CON TODOS LOS OBJETOS CREADOS

const listaDeProductos = [];
listaDeProductos.push(polleraInglesa,tapadoIngles,zapatillasKove,pantalonClaro,camperaKove,tapadoMarron,camperaUrbanaBlanca,sueterMarronKove,pantalonCuadrilleClaro)
console.log(listaDeProductos);

// PRODUCTOS EN PAGINA

const templateContainerProductos = document.getElementById("template-containerProductos").content;
const fragmentProduct = document.createDocumentFragment();
const containerProductos = document.querySelector(".shop-content")

cargaContainerProductos(listaDeProductos)

function cargaContainerProductos(datos) {
    containerProductos.innerHTML = ``;
    datos.forEach(producto => {
        templateContainerProductos.querySelectorAll("img")[0].setAttribute("src", `./img/${producto.img}`)
        templateContainerProductos.querySelectorAll("img")[0].setAttribute("alt", `${producto.nombreProducto}`)
        templateContainerProductos.querySelector("h2").textContent = `${producto.nombreProducto}`
        templateContainerProductos.querySelector("span").textContent = `$${producto.precio}`
        
        const clone = templateContainerProductos.cloneNode(true)
        fragmentProduct.appendChild(clone);
    });
    containerProductos.appendChild(fragmentProduct);
}

// METODO FILTER DE ARRAY PRODUCTOS

const productosBaratos = listaDeProductos.filter(producto => producto.precio < 4000)
console.log(productosBaratos);

// BUSCADOR PAGINA

const btn2 = document.getElementById("buscadorBoton")

btn2.addEventListener("click", () => {

    const input = document.getElementById("entrada")
    const productoBuscado = input.value
    const buscadorContainer = document.querySelector(".buscador-productos")

    const resultado = listaDeProductos.find((buscaProductos) => 
    buscaProductos.nombreProducto === productoBuscado)

    if (resultado) {

        let contenedor = document.createElement("div")
        let contenido = 
        `<h3>El producto que usted busco es:</h3> 
        <p>El producto es ${resultado.nombreProducto} y su precio es: $${resultado.precio}.</p>`
        contenedor.innerHTML = contenido
        buscadorContainer.append(contenedor)
    
    } else {

        let contenedor = document.createElement("div")
        let contenido = 
        `<h3>No existe ese producto!</h3>`
        contenedor.innerHTML = contenido
        buscadorContainer.append(contenedor)

    }

})

// Implemento FETCH 

const lista = document.getElementById("comentariosPagina") 

fetch('./data.json')
    .then( (res) => res.json())
    .then( data => {
        data.forEach((comentario) => {
            const listaComentarios = document.createElement("div")
            listaComentarios.innerHTML = `
            <p>USUARIO: ${comentario.usuario}</p>
            <p>ARTICULO: ${comentario.Compra}</p>
            <p class="comentarios__container--parrafoComentario">COMENTARIO: ${comentario.Comentario}</p>`
            lista.append(listaComentarios)
        });
    })