app.controller('AppCtrl', function($scope, $mdDialog) {
    $scope.demo = {
        topDirections: ['left', 'up'],
        bottomDirections: ['down', 'right'],
        isOpen: false,
        availableModes: ['md-fling', 'md-scale'],
        selectedMode: 'md-fling',
        availableDirections: ['up', 'down', 'left', 'right'],
        selectedDirection: 'up'
    };


$scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'js/angular/views/new-issue-form.html',
      parent: angular.element(document.body),
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };

    var tabs = [{
            title: 'One',
            content: "Tabs will become paginated if there isn't enough room for them."
        }, {
            title: 'Two',
            content: "You can swipe left and right on a mobile device to change tabs."
        }, {
            title: 'Three',
            content: "You can bind the selected tab via the selected attribute on the md-tabs element."
        }],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 1;
    $scope.$watch('selectedIndex', function(current, old) {
        previous = selected;
        selected = tabs[current];
        if (old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
        if (current + 1) $log.debug('Hello ' + selected.title + '!');
    });


}).controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';

    $scope.showListBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-list-template.html',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };

    $scope.showGridBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-grid-template.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
})

.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

        $scope.items = [{
            name: 'Share',
            icon: 'share-arrow'
        }, {
            name: 'Upload',
            icon: 'upload'
        }, {
            name: 'Copy',
            icon: 'copy'
        }, {
            name: 'Print this page',
            icon: 'print'
        }, ];

        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    })
    .controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
        $scope.items = [{
            name: 'Hangout',
            icon: 'hangout'
        }, {
            name: 'Mail',
            icon: 'mail'
        }, {
            name: 'Message',
            icon: 'message'
        }, {
            name: 'Copy',
            icon: 'copy2'
        }, {
            name: 'Facebook',
            icon: 'facebook'
        }, {
            name: 'Twitter',
            icon: 'twitter'
        }, ];

        $scope.listItemClick = function($index) {
            var clickedItem = $scope.items[$index];
            $mdBottomSheet.hide(clickedItem);
        };
    });
