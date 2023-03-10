function calcular(){
    var paisA = parseInt(document.getElementById("paisA").value);
    var paisB = parseInt(document.getElementById("paisB").value);
    
    var taxaCrescimentoA = parseFloat(document.getElementById("crescimentoA").value);
    var taxaCrescimentoB = parseFloat(document.getElementById("crescimentoB").value);


    var contador = 0;

    
while(paisA<paisB){
    
    contador ++;
    if(paisA>paisB){
        
        break;
    }


    paisA +=paisA*taxaCrescimentoA;
    paisB+= paisB*taxaCrescimentoB;
  
}

    console.log("População pais A: " + paisA.toFixed());
    console.log("População pais B: " + paisB.toFixed());
    console.log("----")

    console.log("Total de anos: "+contador)

    alert("Total de anos: "+contador + "\nPopulação A: "+paisA.toFixed()+"\nPopulação País B: "+paisB.toFixed());
    window.location.href = "index.html";
    }




