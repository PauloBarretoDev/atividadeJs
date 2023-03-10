function receber(){
    var nota = document.getElementById("inputNumero");
    if(nota.value<0 || nota.value>10){
        alert("Insira uma nota valida!");
    }
    else{
        alert("O aluno tirou nota " + nota.value);
        window.location.href="index.html"
    }
}