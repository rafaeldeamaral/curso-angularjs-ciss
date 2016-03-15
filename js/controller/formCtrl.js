myApp.controller('FormCtrl', function( $scope ) {

	$scope.indexTarefa = 0;
	$scope.clicouEditar = false;
	
	$scope.pessoa = {
		name : 'Rafael',
		lastname : 'Amaral',
		age : 29,
		email : 'rafael@mail.com',
		phone : 99999
	}

	var data = new Date();

	$scope.list = [
		{
			nomeTarefa : 'Tarefa teste',
			dataTarefa : data.getTime()
		},
		{
			nomeTarefa : 'Tarefa teste 2',
			dataTarefa : data.getTime()
		},
		{
			nomeTarefa : 'Tarefa teste 3',
			dataTarefa : data.getTime()
		},
		{
			nomeTarefa : 'Tarefa teste 4',
			dataTarefa : data.getTime()
		},
		{
			nomeTarefa : 'Tarefa teste 5',
			dataTarefa : data.getTime()
		}
	]

	$scope.cadastrarTarefa = function(data) {
		if (!!data) {
			$scope.list.push({
				nomeTarefa : data,
				dataTarefa : new Date().getTime()
			});
			$scope.tarefa = undefined;
		}
	};

	$scope.editarTarefa = function(data) {
		$scope.renomear = $scope.list[data].nomeTarefa;
		$scope.indexTarefa = data;
		$scope.clicouEditar = true;
	};

	$scope.renomearTarefa = function(data) {
		if (!!data) {
			var tarefa = $scope.list[$scope.indexTarefa];
			tarefa.nomeTarefa = data;
		}
		$scope.renomear = undefined;
		$scope.clicouEditar = false;
	};

});