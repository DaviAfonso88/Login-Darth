var tipo = document.getElementById('senha')
document.getElementById('pass').addEventListener('click', () => {
    if (tipo.value) {
        tipo.type == 'password' ? tipo.type = 'text' : tipo.type = 'password';
        tipo.focus()
        document.getElementById('pass').style.display = 'none';
        document.getElementById('pass2').style.display = 'inline-block';
    }
})

document.getElementById('pass2').addEventListener('click', () => {
    if (tipo.value) {
        tipo.type == 'text' ? tipo.type = 'password' : tipo.type = 'text';
        tipo.focus()
        document.getElementById('pass2').style.display = 'none';
        document.getElementById('pass').style.display = 'inline-block';
    }
})


let entrar = document.querySelector('#button');
entrar.addEventListener('click', () => {
    var senha = document.getElementById("senha");
    var usuario = document.getElementById("usuario");

    if (senha.value == "" & usuario.value == "") {
        alert("senha e login não informados");
    }
    else if (senha.value == "") {
        alert("senha não informada")
    }
    else if (usuario.value == "") {
        alert("login não informado")
    }
    else {
        window.location.href = "http://localhost/Login-Sesc/Logado.html";

    }
})



