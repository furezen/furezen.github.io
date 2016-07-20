angular.module('wechat.directives', [])
.directive('rjCloseBackDrop', [function() {
        return {
            scope: false,//共享父scope
            restrict: 'A',
            replace: false,
            link: function(scope, iElm, iAttrs, controller) {
                //要在html上添加点击事件, 试了很久- -!
                var htmlEl = angular.element(document.querySelector('html'));
                htmlEl.on("click", function(event) {
                    if (event.target.nodeName === "HTML" &&
                        scope.popup.optionsPopup &&
                        scope.popup.isPopup) {
                        scope.popup.optionsPopup.close();
                        scope.popup.isPopup = false;
                    }
                });
            }
        };
    }]).directive('rjHoldActive', ['$ionicGesture', '$timeout',
        function($ionicGesture, $timeout, $ionicBackdrop) {
            return {
                scope: false,
                restrict: 'A',
                replace: false,
                link: function(scope, iElm, iAttrs, controller) {
                    $ionicGesture.on("hold", function() {
                        iElm.addClass('active');
                        //300ms后恢复
                        $timeout(function() {
                            iElm.removeClass('active');
                        }, 300);
                    }, iElm);
                }
            };
        }
    ])
