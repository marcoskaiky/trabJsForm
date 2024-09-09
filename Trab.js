const formInputNomeRock = document.getElementById('nameRock');
const formInputEmailRock = document.getElementById('emailRock');
const formInputBandaRock = document.getElementById('bandaRock');
const btnEnviar = document.getElementById('addButton');
function sendTaks () {
    if (formInputNomeRock.value === "" || formInputEmailRock.value === "" || formInputBandaRock.value === ""){
        alert ("Para ser do Rock tem que Preencher todos os Campos!!!!");
    }      }
btnEnviar.setAttribute('onclick', 'sendTaks()');
