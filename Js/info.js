var btnColor = document.querySelector('.btnColor')

let signin = document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    btnColor.style.left = "0px";
    btnColor.style.width = "108px";
    window.location.href = "http://localhost/Login-Sesc/TelaDeCadastro.html";
    signin.focus();
  })

let Signup = document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    btnColor.style.left = "120px";
    btnColor.style.width = "120px";
  })