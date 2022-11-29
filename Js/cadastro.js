class Validar {
    constructor() {
        this.validacoes = [
            'data-min-length'
        ]
    }

    validate(form) {
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

        let limparvalidacoes = document.querySelectorAll('form .error-validation');
        if(limparvalidacoes.length == 10 ){
            this.fecharValidacoes(limparvalidacoes);
        }

    } 

    minlength(input, minValue){
        let inputLength = input.value.length;
        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`
        if(inputLength < minValue){
            this.printMessage(input, errorMessage);
        }
    }

    printMessage(input, msg){
        let template = document.querySelector('.error-validation').cloneNode(true);
        template.textContent = msg

        let inputParent = input.parentNode;
  
        inputParent.appendChild(template);

    }

    fecharValidacoes(validacoes){
        validacoes.forEach(remover => remover.remove());
    }
}

let form = document.getElementById("registro");
let submit = document.getElementById("cadastrar-btn");
let validar = new Validar();

submit.addEventListener('click', function (e) {
    e.preventDefault();

    validar.validate(form);


});