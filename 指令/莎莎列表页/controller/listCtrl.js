app.controller("listCtrl", function($scope,$http) {
	$http({
		method:'get',
		url:"http://localhost:7777/gain",
		header:{
			'Content-Type':undefined
		}
	}).then(function(data){
			console.log(data)
		},function(err){

		})
})