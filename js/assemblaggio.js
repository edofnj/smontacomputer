function inserisci_immagini() {
    var div_immagini = document.getElementById("images");
    var contenuto="";

    for (let i = 0; i < 30; i++) {
        contenuto+="<img src=\"img/"+i+".jpeg\"/>"
    }

    div_immagini.innerHTML=contenuto;
}

inserisci_immagini();