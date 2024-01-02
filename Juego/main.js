let superman = document.getElementById('superman')
let x = 0
let y = 0

function movimiento(key){
    if(x < 86){
        if(key.key == 'd'){
            x += 2
            superman.style.left = x + '%'
            superman.src = 'images/derecha.png'
        }
    }
    if(y < 86){
        if(key.key == 's'){
            y += 2
            superman.style.top = y + '%'
            superman.src = 'images/frente.png'
        }
    }
    if(x > 0){
        if(key.key == 'a'){
            x -= 2
            superman.style.left = x + '%'
            superman.src = 'images/izquierda.png'
        }
    }
    if(y > 0){
        if(key.key == 'w'){
            y -= 2
            superman.style.top = y + '%'
            superman.src = 'images/atras.png'
        }
    }

    if(x == 10 && (y > 18 && y < 54)){
        x -= 2
        superman.style.left = x + '%'
        alert('MORISTE')
        window.location.reload()
    }else if(y == 18 && (x > 10 && x < 40)){
        y -= 2
        superman.style.top = y + '%'
        alert('MORISTE')
        window.location.reload()
    }else if(x == 40 && (y > 18 && y < 54)){
        x += 2
        superman.style.left = x + '%'
        alert('MORISTE')
        window.location.reload()
    }else if(y == 52 && (x > 10 && x < 40)){
        y += 2
        superman.style.top = y + '%'
        alert('MORISTE')
        window.location.reload()
    }

    if(x == 50 && (y > 46 && y < 84)){
        x -= 2
        superman.style.left = x + '%'
        alert('MORISTE')
        window.location.reload()
    }else if(y == 48 && (x > 50 && x < 84)){
        y -= 2
        superman.style.top = y + '%'
        alert('MORISTE')
        window.location.reload()
    }else if(x == 80 && (y > 46 && y < 84)){
        x += 2
        superman.style.left = x + '%'
        alert('MORISTE')
        window.location.reload()
    }else if(y == 82 && (x > 50 && x < 84)){
        y += 2
        superman.style.top = y + '%'
        alert('MORISTE')
        window.location.reload()
    }

    let moneda1 = document.getElementById('moneda1')

    if((x > 40 && x < 50) && (y > 38 && y < 58) && moneda1.className == 'moneda1'){
        moneda1.className = moneda1.className.replace('moneda1', 'moneda1h')
    }else if((x > 38 && x < 50) && (y > 0 && y < 14) && moneda1.className == 'moneda1h'){
        moneda1.className = moneda1.className.replace('moneda1h', 'moneda2h')
    }else if((x > 82 && x < 88) && (y > 68 && y < 86) && moneda1.className == 'moneda2h'){
        moneda1.className = moneda1.className.replace('moneda2h', 'moneda3h')
        console.log('hecho');
    }else if((x > 12 && x < 26) && (y > 58 && y < 80) && moneda1.className == 'moneda3h'){
        moneda1.className = moneda1.className.replace('moneda3h', 'moneda4h')
    }else if((x > 16 && x < 30) && (y > 6 && y < 18) && moneda1.className == 'moneda4h'){
        moneda1.className = moneda1.className.replace('moneda4h', 'moneda5h')
        alert('GANASTE')
        window.location.reload()
    }
}


window.onkeydown = movimiento