let contador = 1
let contenido = document.getElementById('seccion')
let contenidoF = document.getElementById('seccionF')
let url = 'https://rickandmortyapi.com/api/character'
let favorites = []
let array = []
var personajes
var pagina
let loader

const actualizacionesfavs = ()=>{
    localStorage.setItem('favorites',JSON.stringify(favorites))
}

const loadfavorites = ()=>{
    const storedfavorites = localStorage.getItem('favorites')

    if(storedfavorites){
        favorites = JSON.parse(storedfavorites)
    }
}

let pantalla = document.createElement('div')
pantalla.classList.add('pantalla')

function mostrar(){
    contenidoF.style.display = 'flex'
    contenido.appendChild(pantalla)
}

function ocultar(){
    contenidoF.style.display = 'none'
    pantalla.remove()
}


async function obtenerDatos(api){
    return fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => datos)
        .catch(error => console.log(error))
}

async function inicio(pag, pantallar = false,first = false){
    if(pag !==null){
        pagina = pag
    }
    let getData = await obtenerDatos(url)
    contenido.innerHTML = ''
    loader = document.createElement('span')
    loader.id = 'loader'
    contenido.appendChild(loader)
    showLoader()
    personajes = ''
    if(first){
    for(let i = 1; i < getData.info.pages + 1;i++){
        let getData = await obtenerDatos('https://rickandmortyapi.com/api/character?page=' + i)
        array.push(getData.results)
    }
}
    personajes = [].concat(...array)
    let personajespag = personajes.splice(pagina,12)
    personajespag.map((personaje)=>{
        let article = document.createElement('article')
        let h1 = document.createElement('h1')
        h1.classList.add('nombres')
        h1.classList.add('nombresS1')
        let img = document.createElement('img')
        img.classList.add('imagenP')
        let favoritos = document.createElement('button')
        h1.innerHTML = personaje.name
        img.src = personaje.image
        contenido.appendChild(article)
        article.appendChild(h1)
        article.appendChild(img)
        article.appendChild(favoritos)
        favoritos.classList.add('desfavoritos')
        const index = favorites.findIndex(
            element => element.id == personaje.id
        )
        if(index > -1){
            favoritos.style.backgroundImage = 'url("https://pnghq.com/wp-content/uploads/download-heart-png-full-hd-free-transparent-image-99479.png")'
        }else{
            favoritos.style.backgroundImage = "url('https://static.thenounproject.com/png/4590951-200.png')"
        }
        img.addEventListener('click',()=>{
            let pantalla = document.createElement('div')
            pantalla.classList.add('pantalla')
            let div = document.createElement('div')
            div.classList.add('ficha')
            let button = document.createElement('button')
            let nombre = document.createElement('h1')
            nombre.classList.add('nombresF')
            let info = document.createElement('p')
            let status = document.createElement('p')
            let imagen = document.createElement('img')
            imagen.src = personaje.image
            nombre.innerHTML = personaje.name
            info.innerHTML = `${personaje.species} - ${personaje.gender}`
            status.innerHTML = personaje.status
            contenido.appendChild(pantalla)
            pantalla.appendChild(div)
            div.appendChild(button)
            div.appendChild(imagen)
            div.appendChild(nombre)
            div.appendChild(info)
            div.appendChild(status)
            button.addEventListener('click',()=>{
                div.remove()
                pantalla.remove()
            })
        })
        favoritos.addEventListener('click',()=>{    
            const index = favorites.findIndex(
                element => element.id == personaje.id
            )
            if(index > -1){
                favorites.splice(index,1)
                favoritos.style.backgroundImage = "url('https://static.thenounproject.com/png/4590951-200.png')"
                
                actualizacionesfavs()
            }else{
                favorites.push(personaje)
                favoritos.style.backgroundImage = 'url("https://pnghq.com/wp-content/uploads/download-heart-png-full-hd-free-transparent-image-99479.png")'
                actualizacionesfavs()
            }
            seccionfav()
        })
        })
    let numero = 12
    let sucesion = [0, 0]
    for(let i = 1;i < (829/12);i++){
        sucesion.push(numero);
        numero += 12;
        let paginas = document.createElement('button')
        let paginacion = document.getElementById('paginacion')
        paginas.innerHTML = i
        let sucesiones = sucesion[i]
        paginas.classList.add(sucesiones)
        paginacion.appendChild(paginas)
        paginas.addEventListener('click',()=>{
            inicio(paginas.classList.value)
        })
    }
        if(pantallar){
            contenido.appendChild(pantalla)
        }
        hideLoader()
}

function espar(num){
    return num % 2 == 0
}

let valorPorcentaje = 0

function carrusel(porcentaje){
    let paginacion = document.getElementById('paginacion');
    paginacion.style.transition = 'transform 1.5s ease'
    if(valorPorcentaje == -1600){
        valorPorcentaje = 0
        paginacion.style.transform = `translateX(${valorPorcentaje}%)`
    }else if(valorPorcentaje < 0 || porcentaje < 0){
        valorPorcentaje += porcentaje
        paginacion.style.transform = `translateX(${valorPorcentaje}%)`
    }
}

async function seccionfav(){   
    contenidoF.innerHTML = ''
    contenidoF.innerHTML = '<img class="equis" src="https://icones.pro/wp-content/uploads/2021/08/icone-x-verte.png" alt="" onclick="ocultar()"><h1 class="tituloA">Tus favoritos</h1>'
    loadfavorites()
    favorites.map((personaje)=>{
        let article = document.createElement('article')
        let h1 = document.createElement('h1')
        h1.classList.add('nombresA')
        let img = document.createElement('img')
        let nofavoritos = document.createElement('button')
        h1.innerHTML =  personaje.name
        img.src = personaje.image
        contenidoF.appendChild(article)
        article.appendChild(h1)
        article.appendChild(img)
        article.appendChild(nofavoritos)
        nofavoritos.style.display = 'flex'
        nofavoritos.classList.add('favoritos')
        img.addEventListener('click',()=>{
            let pantalla = document.createElement('div')
            pantalla.classList.add('pantalla')
            let div = document.createElement('div')
            div.classList.add('ficha')
            let button = document.createElement('button')
            let imagen = document.createElement('img')
            imagen.src = personaje.image
            let nombre = document.createElement('h1')
            let info = document.createElement('p')
            let status = document.createElement('p')
            nombre.innerHTML = personaje.name
            info.innerHTML = `${personaje.species} - ${personaje.gender}`
            status.innerHTML = personaje.status
            contenidoF.appendChild(pantalla)
            pantalla.appendChild(div)
            div.appendChild(button)
            div.appendChild(imagen)
            div.appendChild(nombre)
            div.appendChild(info)
            div.appendChild(status)
            button.addEventListener('click',()=>{
                div.remove()
                pantalla.remove()
            })
        })
        nofavoritos.addEventListener('click',()=>{
            const index = favorites.findIndex(
                element => element.id == personaje.id
            )
            const ubicacion = favorites.indexOf(personaje)
            favorites.splice(ubicacion,1)
            actualizacionesfavs()
            seccionfav()
            inicio(null,true)
        })
})
}

function showLoader() {
  loader.style.display = "flex";
}

function hideLoader() {
  loader.style.display = "none";
}

inicio(0,false,true)
seccionfav()
loadfavorites() 