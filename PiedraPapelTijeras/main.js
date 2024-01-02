let jugador = document.getElementById('jugador')
let pc = document.getElementById('pc')
let victorias = []
let historialV = document.getElementById('historialV')
let ganador = document.getElementById('ganador')
if (localStorage.getItem('puntaje') == null) {
    var puntaje = 0
    var puntajePC = 0
}
let puntajeJ = document.getElementById('puntajeJ')
let puntajeP = document.getElementById('puntajeP')

function historial(){
    if(victorias.length > 5){
        victorias.shift()
    }
    localStorage.setItem('victorias',JSON.stringify(victorias))
    localStorage.setItem('puntaje',puntaje)
    localStorage.setItem('puntajePC',puntajePC)
}

function cargarHistorial(){
    const storedVictorias = localStorage.getItem('victorias')
    const storedPuntaje = localStorage.getItem('puntaje')
    const storedPuntajePC = localStorage.getItem('puntajePC')

    if(storedVictorias){
        victorias = JSON.parse(storedVictorias)
    }
    if(storedPuntaje){
        puntaje = parseInt(storedPuntaje)
    }
    if(storedPuntajePC){
        puntajePC = parseInt(storedPuntajePC)
    }

}

function jugar(num){
    let computadora = Math.floor(Math.random() * 3 + 1)
    jugador.src = `images/ppot-removebg-preview (1) (${num}).png`
    pc.src = `images/ppot-removebg-preview (1) (${computadora}).png`
    if(num == 1 && computadora == 3){
        let mensaje = 'Tú ganas - PC pierde'
        ganador.innerHTML = mensaje
        victorias.push(mensaje)
        puntaje += 1
        historial()
        mostrarHistorial()
    }else if(num == 1 && computadora == 2){
        let mensaje = 'Tú pierdes - PC gana'
        ganador.innerHTML = mensaje
        victorias.push(mensaje)
        puntajePC += 1
        historial()
        mostrarHistorial()
    }else if(num == computadora){
        let mensaje = 'Tú y PC empatan'
        ganador.innerHTML = mensaje
        victorias.push(mensaje)
        historial()
        mostrarHistorial()
    }else if(num == 2 && computadora == 3){
        let mensaje = 'Tú pierdes - PC gana'
        ganador.innerHTML = mensaje
        victorias.push(mensaje)
        puntajePC += 1
        historial()
        mostrarHistorial()
    }else if(num == 2 && computadora == 1){
        let mensaje = 'Tú ganas - PC pierde'
        ganador.innerHTML = mensaje
        victorias.push(mensaje)
        puntaje += 1
        historial()
        mostrarHistorial()
    }else if(num == 3 && computadora == 2){
        let mensaje = 'Tú ganas - PC pierde'
        ganador.innerHTML = mensaje
        victorias.push(mensaje)
        puntaje += 1
        historial()
        mostrarHistorial()
    }else if(num == 3 && computadora == 1){
        let mensaje = 'Tú pierdes - PC gana'
        ganador.innerHTML = mensaje
        victorias.push(mensaje)
        puntajePC += 1
        historial()
        mostrarHistorial()
    }
}

function mostrarHistorial(){
    historialV.innerHTML = ''
    victorias.forEach((elemento)=>{
        historialV.innerHTML += `<li>${elemento}</li>`
    })    
    puntajeJ.textContent = ''
    puntajeJ.textContent = `Tú = ${puntaje}`
    puntajeP.textContent = ''
    puntajeP.textContent += `PC = ${puntajePC}` 
    
}

function borrarHistorial(){
    historialV.innerHTML = ''
    localStorage.setItem('victorias','')
    victorias = []
    ganador.innerHTML = 'ESCOGE'
    jugador.src = `https://icones.pro/wp-content/uploads/2021/04/icone-cercle-gris.png`
    pc.src = `https://icones.pro/wp-content/uploads/2021/04/icone-cercle-gris.png`
    puntaje = 0
    puntajePC = 0
    puntajeJ.textContent = 'Tú = 0'
    puntajeP.textContent = 'PC = 0'
    localStorage.setItem('puntaje','0')
    localStorage.setItem('puntajePC','0')
}

function modo(){
    let modo = document.getElementById('modo')
    modo.classList.toggle('botonOscuro')
    if(modo.classList[1] == 'botonOscuro'){
        modo.textContent = 'Modo Claro'
    }else{
        modo.textContent = 'Modo Oscuro'
    }
    let header = document.getElementById('header')
    let main = document.getElementById('main')
    let footer = document.getElementById('footer')
    header.classList.toggle('modoOscuro')
    main.classList.toggle('modoOscuro')
    footer.classList.toggle('modoOscuro')
}

cargarHistorial()
mostrarHistorial()