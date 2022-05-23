let turno = 0;
var vectorResultado=[];
var rRX=0;
var rVO=0;

const BotonPulsado = (e,posicion) =>{
    turno ++;
    var btn = e.target;
    var color = turno %2 ? btn.style.backgroundImage = "url('./O2.jpeg')" : btn.style.backgroundImage = "url('./x2.jpeg')"
    btn.style.backgroundImage = color;
    console.log(color)
    
    vectorResultado[posicion]=color;
    if (ganador()) {
        if(color == "url('./O2.jpeg')"){
            alert ('Felicitaciones jugador O ha ganado')
        }else {
            alert ('Felicitaciones jugador X ha ganado')}

        //alert ('Felicitaciones jugador '+ ganador,'ha ganado');
        if (turno % 2){
            rVO++;
            
            sumarPuntajeVO(rVO);
            resetearTablero();//////Ver funcion abajo de todo
            //alert (rVO);
        }else{
            rRX++;
            
            sumarPuntajeRX(rRX);
            resetearTablero();////// Ver funcion abajo de todo
            //alert (rRX);
        }
    }else if(turno==9){
        alert("Empate");
        resetearTablero();
    }
}
const ganador=()=>{
    if(vectorResultado[0]==vectorResultado[1] && vectorResultado[0]==vectorResultado[2] && vectorResultado[0]){
        return true;
    }else if(vectorResultado[3]==vectorResultado[4] && vectorResultado[3]==vectorResultado[5] && vectorResultado[5]){
        return true;
    }else if(vectorResultado[6]==vectorResultado[7] && vectorResultado[6]==vectorResultado[8] && vectorResultado[6]){
        return true;
    }else if(vectorResultado[0]==vectorResultado[3] && vectorResultado[0]==vectorResultado[6] && vectorResultado[0]){
        return true;
    }else if(vectorResultado[1]==vectorResultado[4] && vectorResultado[1]==vectorResultado[7] && vectorResultado[1]){
        return true;
    }else if(vectorResultado[2]==vectorResultado[5] && vectorResultado[2]==vectorResultado[8] && vectorResultado[2]){
        return true;
    }else if(vectorResultado[0]==vectorResultado[4] && vectorResultado[0]==vectorResultado[8] && vectorResultado[0]){
        return true;
    }else if(vectorResultado[2]==vectorResultado[4] && vectorResultado[2]==vectorResultado[6] && vectorResultado[2]){
        return true;
    }
    return false
}
document.querySelectorAll('button').forEach(
    (obj,i) => obj.addEventListener('click', (e) => BotonPulsado(e,i)));

    function reiniciarPartida(){
    //Agregar ganador de la partida total
    location.reload();
}

function sumarPuntajeRX(val) {
    document.getElementById("resRojo").innerHTML = val;
}

function sumarPuntajeVO(val) {
    document.getElementById("resVerde").innerHTML = val;
}


// Ayuda aca con una funcion para resetear el tablero una vez que termina una partida
function resetearTablero(){
    turno=0;
    vectorResultado=[];
    var bt = document.querySelector('botones');
    //bt.style.backgroundImage= "url('./fondobtn.jpeg')";
    bt.style.backgroundColor=rgb(172, 173, 172)
    console.log(bt);
    }

//A corregir boton de reinicio de partida 