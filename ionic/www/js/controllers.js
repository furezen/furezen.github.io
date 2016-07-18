.controller('messageCtrl', function($scope, $state, $ionicPopup, localStorageService, messageService) {
    $scope.popup = {
        isPopup: false,
        index: 0
    };
    $scope.onSwipeLeft = function() {
        $state.go("tab.friends");
    };
    $scope.popupMessageOpthins = function($index) {
        $scope.popup.index = $index;
        //这里通过$ionicPopup.show()方法创建了一个自定义的popup
        $scope.popup.optionsPopup = $ionicPopup.show({
            templateUrl: "templates/popup.html",
            scope: $scope,
        });
        $scope.popup.isPopup = true;
    };
    //实现标为已读/未读, 注意$scope.popup.optionsPopup.close()方法
    //用来关闭弹窗, 我竟然找了很久才发现这个接口
    $scope.markMessage = function() {
        var index = $scope.popup.index;
        var message = $scope.messages[index];
        if (message.showHints) {
            message.showHints = false;
            message.noReadMessages = 0;
        }else{
            message.showHints = true;
            message.noReadMessages = 1;
        }
        $scope.popup.optionsPopup.close();
        $scope.popup.isPopup = false;
        messageService.updateMessage(message);
    };