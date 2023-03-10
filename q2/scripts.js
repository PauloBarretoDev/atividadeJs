function login(){
    var name = document.getElementById("name");
    var password = document.getElementById("password");

    if(name.value===password.value){
        alert("O nome de usuario e senha não podem ser iguais!")
    }
    else{
        alert("Logado com sucesso!")
        window.location.href="logado.html"

    }
}