function verificar(){
    var nome = document.getElementById("txtnome").value;
    var email = document.getElementById("txtemail").value;
    var mat = document.getElementById("mat").value;
    var nota = document.getElementById("txtnota").value;
    var msg = document.getElementById("msg").value;
    if(nome==""){
        window.alert("Digite seu nome");
        document.getElementById("txtnome").focus();
        document.getElementById("txtnome").style.borderColor="#FF0000";
        return false;
    }

    else if(email==""){
        window.alert("Digite seu email");
        document.getElementById("txtemail").focus();
        document.getElementById("txtemail").style.borderColor="#FF0000";
        return false;
    }

    else if(email.indexOf("@")==-1){
        window.alert("Email incorreto");
        document.getElementById("txtemail").style.borderColor="#FF0000";
        document.getElementById("txtemail").focus();
        document.getElementById("txtemail").value="";
        return false;
    }

    else if(mat=="x"){
        window.alert("Escolha uma disciplina");
        document.getElementById("materia").focus();
        document.getElementById("materia").style.borderColor="#FF0000";
       return false;
    }

    else if(nota==""){
        window.alert("Digite a nota")
        document.getElementById("txtnota").style.borderColor="#FF0000";
        document.getElementById("txtnota").focus();
        return false;
    }

    else if(isNaN(nota)){
        window.alert("Digite apenas números");
        document.getElementById("txtnota").style.borderColor="#FF0000";
        document.getElementById("txtnota").value="";
        document.getElementById("txtnota").focus();
        return false;
    }

    else if(nota<0||nota>7){
        window.alert("Números entre zero e sete");
        document.getElementById("txtnota").focus();
        document.getElementById("txtnota").style.borderColor="#FF0000";
        document.getElementById("txtnota").value="";
        document.getElementById("txtnota").value;
        return false;
    }

    else if(msg == 0){
        window.alert("Faça um comentário");
        document.getElementById("msg").focus();
        document.getElementById("msg").style.borderColor="#FF0000";
        return false;
    }

    else {
        return true;
    }
}