angular.module("TelaDeCadastro", ["ngMessages"]);
angular.module("TelaDeCadastro").controller("TelaDeCadastroCtrl", function ($scope) {
    $scope.app = "Tela de Cadastro";
    $scope.CadastrarUsuario = [];
    $scope.CadastrarNome = [];
    $scope.CadastrarData = [];
    $scope.CadastrarEmail = [];
    $scope.CadastrarSenha = [];
    $scope.ConfirmarSenha = [];
})

var carregarUsuario = function () {
    CadastrarUsuario.getusuario().then(function (response) {
        $scope.contatos = response.data;


    }).catch(function (response) {


        $scope.error = "NÃ£o foi possÃ­vel carregar os dados!";
        $scope.message = "Ops, aconteceu um problema!";


    });
};


var carregarNome = function () {
    CadastrarNome.getNome().then(function (response) {
        $scope.operadoras = response.data;

    });
};

$scope.CadastrarUsuario = function (usuario) {
    CadastrarUsuario.saveUsuario(usuario).then(function (response) {
        $scope.usuarios = response.data;
        delete $scope.usuario;
        $scope.usuarioForm.$setPristine();
        carregarUsuarios();
    });


};

$scope.isUsuarioSelecionado = function (usuarios) {
    return [...usuarios].some(function (usuario) {
        return usuario.selecionado;
    });


};

$scope.CadastrarNome = function (nome) {
    CadastrarNome.saveNome(nome).then(function (response) {
        $scope.nomes = response.data;
        delete $scope.nome;
        $scope.nomeForm.$setPristine();
        carregarNomes();
    });


};

$scope.isNomeSelecionado = function (nomes) {
    return [...nomes].some(function (nome) {
        return nome.selecionado;
    });


};

$scope.CadastrarData = function (data) {
    CadastrarData.saveNome(data).then(function (response) {
        $scope.datas = response.data;
        delete $scope.data;
        $scope.dataForm.$setPristine();
        carregarDatas();
    });


};

$scope.isDataSelecionado = function (datas) {
    return [...datas].some(function (data) {
        return data.selecionado;
    });


};

$scope.CadastrarEmail = function (email) {
    CadastrarEmail.saveNome(email).then(function (response) {
        $scope.emails = response.data;
        delete $scope.email;
        $scope.emailForm.$setPristine();
        carregarEmails();
    });


};

$scope.isEmailSelecionado = function (emails) {
    return [...emails].some(function (email) {
        return email.selecionado;
    });


};

$scope.CadastrarSenha = function (senha) {
    CadastrarSenha.saveNome(senha).then(function (response) {
        $scope.senhas = response.data;
        delete $scope.senha;
        $scope.senhaForm.$setPristine();
        carregarSenhas();
    });


};

$scope.isSenhaSelecionado = function (senhas) {
    return [...senhas].some(function (senha) {
        return senha.selecionado;
    });


};

$scope.classe = "selecionado";

carregarUsuarios();
carregarNomes();
carregarDatas();
carregarEmails();
carregarSenhas();




