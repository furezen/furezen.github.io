angular.module('wechat.controllers', [])
.controller('messageCtrl', function($scope, $state, $ionicPopup) {
    $scope.popup = {
        isPopup: false,
        index: 0
    };
	$scope.onSwipeLeft = function(){
		$state.go("tab.friends");
	};
	$scope.popupMessageOpthins = function($index){
		$scope.popup.index = $index;
		//创建自定义popup
		$scope.popup.optionsPopup = $ionicPopup.show({
			templateUrl:"templates/popup.html",
			scope:$scope,
		});
		$scope.popup.isPopup = true ;

	}
	//实现已读未读，
	$scope.markMessage=function(){
		var index = $scope.popup.index;
		var message = $scope.message[index];
		if(message.showHints){
			message.showHints = false;
			message.noReadMessage = 0;
		}else{
			message.showHints = true;
			message.noReadMessage = 1;
		}
		$scope.popup.optionsPopup.close();
		$scope.popup.isPopup = false;
		//messageService.updateMessage(message);
	}
})