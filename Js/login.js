let btn = document.querySelector('.fa-eye');
btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})


let entrar = document.querySelector('#button');
entrar.addEventListener('click', ()=>{
    var senha = document.getElementById("senha");
    var usuario = document.getElementById("usuario");
    
    if(senha.value == "" & usuario.value == ""){
        alert("senha e login não informados");
    }
    else if( senha.value == ""){
        alert("senha não informada")
    }
    else if( usuario.value == ""){
        alert("usúario não informado")
    }
    else{
        window.location.href = "http://localhost/Login-Sesc/Logado.html";

    }
})



