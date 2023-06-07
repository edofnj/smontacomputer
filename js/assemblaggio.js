function inserisci_immagini() {
    var div_immagini = document.getElementById("images");
    var contenuto="";

    for (let i = 29; i >= 0; i--) {
        contenuto+="<img src=\"img/"+i+".jpeg\"/>"
    }

    div_immagini.innerHTML=contenuto;
}

inserisci_immagini();