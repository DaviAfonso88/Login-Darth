class Validar {
    constructor() {
        this.validacoes = [
            'data-required',
            'data-only-letters',
            'data-min-length',
            'data-max-length',
            'data-date-validate',
            'data-required',
            'data-email-validate',
            'data-equal',
            'data-password-validate',
            'data-error-input'
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
        let errorsInputreq = input.style.borderBottom = '2px solid #e63636';
        if (inputValue == '') {
            let errorMessage = `Este campo é obrigatório`;
            this.printMessage(input, errorMessage);
            errorsInputreq;

        } else if (inputValue !== '') {
            errorsInputreq = input.style.borderBottom = '';

        }


    }

    minlength(input, minValue) {
        let inputLength = input.value.length;
        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
        let labeluser = document.getElementById("label3").style.color = '#f16363';
        if (inputLength < minValue) {
            this.printMessage(input, errorMessage); labeluser;
        } else {
            labeluser = document.getElementById("label3").style.color = '';
        }
    }

    datevalidate(input, minValue) {
        let inputLength = input.value.length;
        let errorMessage = `O campo data esta incompleto`;
        let labeldate = document.getElementById("label4").style.color = '#f16363';
        let errorsInput = input.style.borderBottom = '2px solid #e63636';
        if (inputLength < minValue) {
            this.printMessage(input, errorMessage); labeldate; errorsInput
        } else {
            labeldate = document.getElementById("label4").style.color = '';
            errorsInput = input.style.borderBottom = '';
        }
    }

    maxlength(input, maxValue) {
        let inputLength = input.value.length;
        let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;
        if (inputLength > maxValue) {
            this.printMessage(input, errorMessage);
        }
    }

    onlyletters(input, minValue) {
        let regular = /^[A-Za-z]+$/;
        let errorsInput = input.style.borderBottom = '2px solid #e63636';
        let labelnome = document.getElementById("label1").style.color = '#f16363';
        let inputValue = input.value;
        let errorMessage = `Este campo não aceita números nem caracteres especiais`;

        if (!regular.test(inputValue)) {
            this.printMessage(input, errorMessage); errorsInput; labelnome;
        }


        else {
            errorsInput = input.style.borderBottom = '';
            labelnome = document.getElementById("label1").style.color = '';
        }
    }

    emailvalidate(input) {
        let regular =  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
        let errorsInput = input.style.borderBottom = '2px solid #e63636';
        let labelemail = document.getElementById("label2").style.color = '#f16363';
        let CadastrarEmail = input.value;
        let errorMessage = `Insira um e-mail no padrão XXXX@gmail.com.br`;

        if (!regular.test(CadastrarEmail)) {
            this.printMessage(input, errorMessage);
            errorsInput; labelemail

        } else if (regular.test(CadastrarEmail)) {
            errorsInput = input.style.borderBottom = '';
            labelemail = document.getElementById("label2").style.color = '';
        }
    }

    passwordvalidate(input) {

        let caracter = /^(?=.*[A-Z])(?=.*[!#@$_])(?=.*[0-9])(?=.*[a-z]).{4,15}$/;
        let Value = input.value;
        let labelsenha = document.getElementById("label5").style.color = '#f16363';
        let errorsInput = input.style.borderBottom = '2px solid #e63636';
        let eye = document.getElementById("btn1").style.color = '#f16363';

        if (!caracter.test(Value)) {
            let errorMessage = `A senha precisa conter letra maiúscula, números e caracteres especiais`
            this.printMessage(input, errorMessage); errorsInput; eye; labelsenha

        } else if (caracter.test(Value)) {
            errorsInput = input.style.borderBottom = '';
            eye = document.getElementById("btn1").style.color = '';
            labelsenha = document.getElementById("label3").style.color = '';
        }


    }

    equal(input, inputName) {
        let inputCompara = document.getElementsByName(inputName)[0];
        let errorMessage = `Este campo precisa estar igual ao campo ${inputName}`;
        let labelequal = document.getElementById("label6").style.color = '#f16363';
        let errorsInput = input.style.borderBottom = '2px solid #e63636';
        let eye2 = document.getElementById("btn2").style.color = '#f16363';


        if (input.value != inputCompara.value) {
            this.printMessage(input, errorMessage); errorsInput; eye2; labelequal

        } else if (input.value == inputCompara.value && input.value !== "") {
            errorsInput = input.style.borderBottom = '';
            eye2 = document.getElementById("btn2").style.color = '';
            labelequal = document.getElementById("label6").style.color = '';
        }
    }



    printMessage(input, msg) {
        let errorsQtd = input.parentNode.querySelector('.error-validation');

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

let form = document.getElementById("registro");
let submit = document.getElementById("btn");
let validar = new Validar();

submit.addEventListener('click', function (e) {
    e.preventDefault();

    validar.validate(form);


});

let btnsenha = document.querySelector('#btn1');
btnsenha.addEventListener('click', () => {
    let inputSenha = document.querySelector('#password')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

let btnConfirm = document.querySelector('#btn2');
btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#passwordconfirmation')
    if (inputConfirmSenha.getAttribute('type') == 'password') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})

let campos = document.querySelectorAll('.error-input');

let input = document.getElementById("data");
input.addEventListener("keyup", date);

function date(inputData, e) {

    var tecla = e.which;

    if (tecla >= 47 && tecla < 58) {

        var data = inputData.value;

        if (data.length == 2) {

            if (inputData.value >= 1 && inputData.value <= 31) {

                data += '/';

                inputData.value = data;

            }

            else

                return false;

        }

        if (data.length == 5) {

            mes = data[3] + data[4];

            if (mes >= 1 && mes <= 12) {

                data += '/';
                inputData.value = data;

            }

            else

                return false;

        }

        if (data.length == 8) {

            ano = data[6] + data[7];

            if (ano >= 19 && ano <= 21) {
                inputData.value = data;
                return true;
            }
            else
                return false;
        }


    } else if (tecla == 8 || tecla == 0)

        return true;

    else

        return false;

}