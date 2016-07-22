// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'wechat.routes', 'wechat.controllers', 'wechat.directives'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
}).controller('Gua', function($scope, $ionicModal) {
    // 内容 测试
    /*$scope.tasks = [{
        title: "人生经验"
    }, {
        title: "https://www.youtube.com"
    }, {
        title: "西方国家"
    }, {
        title: "https://www.youku.com"
    }];*/
    //载入并创建模型
    $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
        $scope.taskModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });
    //表单提交时调用
    $scope.createTask = function(task) {
        $scope.task.push({
            title: tatle.title
        });
        $scope.taskModal.hide();
        task.title = "";

    };
    //打开新增模型
    $scope.newTask = function() {
        $scope.taskModal.show();
    };
    //关闭新模型
    $scope.closeNewTask = function() {
        $scope.taskModal.hide();
    };
    $scope.task = {
        title: ""
    };
    $scope.fMessage = [{
        name: "ＬＨ",
        img: '2.PNG',
        fnew: '我还差你多少东西？'
    }]
    $scope.task = {
        title: "微信"
    }
}).config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top

}])
