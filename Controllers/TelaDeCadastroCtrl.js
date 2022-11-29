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


