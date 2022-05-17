let turno = 0;
const vectorResultado=[];

const BotonPulsado = (e,posicion) =>{
    turno ++;
    const btn = e.target;
    const color = turno %2 ? 'green':'red';
    btn.style.backgroundColor= color;
    vectorResultado[posicion]=color;
    if (ganador()) alert ('Felicitaciones jugador '+ color,'ha ganado')
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
    location.reload();
}
