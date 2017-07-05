app.controller("listCtrl", function($scope,$sce) {
	//model
	$scope.news = [{
		title: "兰蔻",
		img: "./img/1.png",
		desc: "质感丰盈柔滑，润而不腻，瞬间即被肌肤吸收，减淡幼纹及皱纹，高度增加眼部肌肤弹性，大大提升紧致度，令眼部干燥肌肤变得滋润幼嫩。"
	}, {
		title: "雅诗兰黛",
		img: "./img/2.jpg",
		desc: "倡导先净化，再根源修护，彻夜清空累积损伤，从源头突破，强化夜间巅峰修护力。肌肤深透滋润，平滑，抚纹，匀净，透亮。"
	}]

	$scope.html = $scope.news.map(function(item) {
		return `
			<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
						<div class="weui-media-box__hd">
							<img class="weui-media-box__thumb" src="${item.img}" alt="">
						</div>
						<div class="weui-media-box__bd">
							<h4 class="weui-media-box__title">${item.title}</h4>
							<p class="weui-media-box__desc">${item.desc}</p>
						</div>
					</a>
		`
	}).join("")
	$scope.html = $sce.trustAsHtml($scope.html);
	console.log($scope.news[0].img)
	$scope.$emit("to-brother",[$scope.news[0].img,$scope.news[1].img])
})