var paisA = 80000;
var paisB = 200000;

var contador = 0;

var taxaCrescimentoA = 0.03;
var taxaCrescimentoB = 0.015;


while(paisA<paisB){
    
    contador ++;
    if(paisA>paisB){
        
        break;
    }
    console.log("População pais A: " + paisA.toFixed());
    console.log("População pais B: " + paisB.toFixed());
    console.log("----")

    paisA +=paisA*taxaCrescimentoA;
    paisB+= paisB*taxaCrescimentoB;
  
}

console.log("População pais A: " + paisA.toFixed());
        console.log("População pais B: " + paisB.toFixed());
        console.log("----")

console.log("Total de anos: "+contador)