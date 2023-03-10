function validarForm(){
    var  nome = new String (document.getElementById("nome").value);
    var idade =  parseInt(document.getElementById("idade").value);
    var salario = parseFloat(document.getElementById("salario").value);
    var sexo = new String(document.getElementById("sexo").value);
    var estadoCivil = new String (document.getElementById("estadoCivil").value);



    if(nome.length<3){
        alert("Erro! o nome deve possuir ao menos 3 caracteres!")
    }
    else if(idade<=0 || idade>150){
        alert("Erro! a idade deve ser maior que 0 e menor que 150!")
    }
    else if(salario<=0){
        alert("Erro! o salário informado deve ser maior que 0!")
    }
    else if(sexo[0]!== 'F' && sexo[0]!=='M'){
        alert("Erro! informe uma opção correta de sexo!")
    }
    else if(estadoCivil[0]!=='S' && estadoCivil[0]!=='C' && estadoCivil[0]!=='D' && estadoCivil[0]!=='V'){
        alert("Erro! informe uma opção valida de estado civil!")
    }
    else{
        alert("Cadastrado com sucesso!")
        window.location.href = "cadastrado.html";
    }

    
}