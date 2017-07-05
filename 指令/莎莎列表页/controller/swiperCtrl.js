//controller
app.controller("swiperCtrl", function($scope) {
	//model
	$scope.title = "莎莎网"
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
	$scope.imgs = ["./img/1b.jpg", "./img/2b.jpg"]
})