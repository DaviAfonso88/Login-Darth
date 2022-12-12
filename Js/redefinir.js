class Validar {
    constructor() {
        this.validacoes = [
            'data-required',
            'data-equal',
            'data-password-validate',

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
        let errorsInput = input.style.border = '2px solid #e63636';

        if (inputValue === '') {
            let errorMessage = `Este campo é obrigatório`;
            this.printMessage(input, errorMessage);
            errorsInput;

        } else if (inputValue !== '') {
            errorsInput = input.style.border = '';

        }
    }

    passwordvalidate(input) {
        let caracter = /^(?=.*[A-Z])(?=.*[!#@$%&*-_=+])(?=.*[0-9])(?=.*[a-z]).{4,15}$/;
        let Value = input.value
        let novasenha = document.getElementById("novasenhalabel").style.color = '#f16363';
        let eye = document.getElementById("exibir").style.color = '#f16363';
        let errorsInput = input.style.border = '2px solid #e63636';


        if (!caracter.test(Value)) {
            let errorMessage = `A senha precisa conter letra maiúscula, números e caracteres especiais`
            this.printMessage(input, errorMessage); errorsInput; eye; novasenha

        } else if (caracter.test(Value)) {
            errorsInput = input.style.border = '';
            eye = document.getElementById("exibir").style.color = '';
            novasenha = document.getElementById("novasenhalabel").style.color = '';

        }


    }

    equal(input, inputName) {
        let inputCompara = document.getElementsByName(inputName)[0];
        let errorMessage = `Este campo precisa estar igual ao campo ${inputName}`;
        let confirmarsenha = document.getElementById("confirmarlabel").style.color = '#f16363';
        let errorsInput = input.style.border = '2px solid #e63636';
        let eye2 = document.getElementById("confirm").style.color = '#f16363';

        if (input.value != inputCompara.value) {
            this.printMessage(input, errorMessage); errorsInput; eye2; confirmarsenha

        } else if (input.value == inputCompara.value && input.value !== "") {
            errorsInput = input.style.border = '';
            eye2 = document.getElementById("confirm").style.color = '';
            confirmarsenha = document.getElementById("confirmarlabel").style.color = '';
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
let submit = document.getElementById("button");
let validar = new Validar();

submit.addEventListener('click', function (e) {
    e.preventDefault();

    validar.validate(form);


});

let senha = document.querySelector('#exibir');
senha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

let Confirm = document.querySelector('#confirm');
Confirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#confirmarsenha')
    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})


