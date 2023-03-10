function verificarMaior(){
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let n3 = parseInt(document.getElementById("numero3").value);
    let n4 = parseInt(document.getElementById("numero4").value);
    let n5 = parseInt(document.getElementById("numero5").value);

    let maiorNumero = n1;

    if(n2>maiorNumero){
        maiorNumero=n2;
    }
    if(n3>maiorNumero){
        maiorNumero=n3;
    }if(n4>maiorNumero){
        maiorNumero=n4;
    }if(n5>maiorNumero){
        maiorNumero=n5;
    }
    
    alert('O maior número é: ' + maiorNumero)
}