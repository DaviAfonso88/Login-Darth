angular.module("TelaDeCadastro", ["ngMessages"]);
angular.module("TelaDeCadastro").controller("TelaDeCadastroCtrl", function($scope){
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
        $scope.contatoForm.$setPristine();
        carregarUsuarios();
    });


};

$scope.isUsuarioSelecionado = function (usuarios) {
    return [...usuarios].some(function (usuario) {
        return usuario.selecionado;
    });


};

$scope.classe = "selecionado";

carregarUsuario();




