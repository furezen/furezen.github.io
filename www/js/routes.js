//声明模块，在app.js中注入
angular.module('wechat.routes', []).config(function($stateProvider,$urlRouterProvider) {
	//默认是tabs.messages
	$urlRouterProvider.otherwise("/tab/message");
	$stateProvider
	//如果tab状态被激活，加载tab.html模版
	.state('tab',{
		url:'/tab',
		abstract:true,
		templateUrl:"templates/tabs.html"
	})
	.state('tab.message',{
		url:'/message',
		views:{
		'tab-message':{
		templateUrl:"templates/tab-message.html"
		}
	}
	})
	.state('tab.friends',{
		url:'/friends',
		views:{
		'tab-friends':{
		templateUrl:"templates/tab-friends.html"
		}
	}
	})
	.state('tab.find',{
		url:'/find',
		views:{
			'tab-find':{
				templateUrl:'templates/tab-find.html'
			}
		}
	})
	.state('tab.setting', {
            url: '/setting',
            views: {
                'tab-setting': {
                    templateUrl: 'templates/tab-setting.html',
                    //controller: "settingCtrl"
                }
            }
        })
	
})
