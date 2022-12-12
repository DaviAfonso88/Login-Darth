class Validar {
    constructor() {
        this.validacoes = [
            'data-email-validate',
        ]
    }

    validate(form) {
        let limparvalidacoes = document.querySelectorAll('form .error-validation');
        if (limparvalidacoes.length > 0) {
            this.fecharValidacoes(limparvalidacoes);
        }

        let inputs = form.getElementsByTagName('input');
        let inputsArray = [...inputs];

        inputsArray.forEach(function (input) {
            for (let i = 0; this.validacoes.length > i; i++) {
                if (input.getAttribute(this.validacoes[i]) != null) {
                    let metodo = this.validacoes[i].replace('data-', '').replace('-', '');
                    let value = input.getAttribute(this.validacoes[i]);
                    this[metodo](input, value);
                }
            }
        }, this);

    }
    required(input) {
        let inputValue = input.value;
        if (inputValue === '') {
            let errorMessage = `Este campo é obrigatório`;
            this.printMessage(input, errorMessage);
        }
    }
    emailvalidate(input) {
        let regular = /\S+@\S+\.\S+/;

        let CadastrarEmail = input.value;
        let errorMessage = `Insira um e-mail no padrão XXXX@gmail.com`;

        if (!regular.test(CadastrarEmail)) {
            this.printMessage(input, errorMessage);
        }
    }

    printMessage(input, msg) {
        let errorsQtd = input.parentNode.querySelector('.error-validation')
        if (errorsQtd === null) {
            let template = document.querySelector('.error-validation').cloneNode(true);

            template.textContent = msg;

            let inputParent = input.parentNode;

            template.classList.remove('template');

            inputParent.appendChild(template);
        }
    }

    fecharValidacoes(validacoes) {
        validacoes.forEach(remover => remover.remove());
    }
}

let form = document.getElementById("nameForm");
let submit = document.getElementById("enviar");
let validar = new Validar();

submit.addEventListener('click', function (e) {
    e.preventDefault();

    validar.validate(form);


});

// let btn = document.querySelector('#enviar');
// btn.addEventListener('click', () => {
//     window.location.href = "http://localhost/Login-Sesc/TelaDeRedefinir.html";


// })
let entrar = document.querySelector('#enviar');
entrar.addEventListener('click', () => {
    window.location.href = "http://localhost/Login-Sesc/TelaDeRedefinir.html";

})