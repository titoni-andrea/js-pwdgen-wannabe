// const nomeUtente = prompt("Nome")

// const cognomeUtente = prompt("Cognome")

// const coloreUtente = prompt("Colore Preferito")

// let pwd = nomeUtente + cognomeUtente + coloreUtente + "#24"

// alert(pwd)

function PwdGen() {
    let nomeUtente = document.getElementById("name").value;
    let cognomeUtente = document.getElementById("cognome").value;
    let coloreUtente = document.getElementById("colore").value;

    const noRisultato = "Finisci di compilare il modulo per ottenere la Password!"

    let risultato = nomeUtente + cognomeUtente + coloreUtente
    if (nomeUtente == 0) {
        alert(noRisultato)
    }
    else if (cognomeUtente == 0) {
        alert(noRisultato)
    }

    else if (coloreUtente == 0) {
        alert(noRisultato)
    }
    else {
        alert(risultato)
        document.getElementById("name").value = ""
        document.getElementById("cognome").value = ""
        document.getElementById("colore").value = ""
    }

}