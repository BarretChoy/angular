//controller
app.controller("swiperCtrl", function($scope,$rootScope) {
	//model
	$scope.title = "莎莎网"
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
	$rootScope.$on("to-brother",function(evt,data){
		// console.log()
		$scope.imgs = data;
	})
	
})