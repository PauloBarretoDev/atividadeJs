function somaMedia(){
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let n3 = parseInt(document.getElementById("numero3").value);
    let n4 = parseInt(document.getElementById("numero4").value);
    let n5 = parseInt(document.getElementById("numero5").value);

    let soma = n1+n2+n3+n4+n5;
    let media = soma/5;

    alert(`A soma dos valores foi: ${soma} e a média foi: ${media}`)

}