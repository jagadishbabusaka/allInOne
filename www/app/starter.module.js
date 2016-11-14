(function () {
	angular.module('starter', ['ionic', 'starter.controllers'])
		.config(config)
		.run(run);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider){
		$stateProvider

		    .state('app', {
		    url: '/app',
		    abstract: true,
		    templateUrl: 'app/menu/menu.html',
		    controller: 'AppCtrl'
		  })

		  .state('app.search', {
		    url: '/search',
		    views: {
		      'menuContent': {
		        templateUrl: 'templates/search.html'
		      }
		    }
		  })
		  
		  // if none of the above states are matched, use this as the fallback
		  $urlRouterProvider.otherwise('/app/playlists');
	}

	run.$inject = ['$ionicPlatform'];

	function run($ionicPlatform){
		$ionicPlatform.ready(function() {
		    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		    // for form inputs)
		    if (window.cordova && window.cordova.plugins.Keyboard) {
		      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		      cordova.plugins.Keyboard.disableScroll(true);

		    }
		    if (window.StatusBar) {
		      // org.apache.cordova.statusbar required
		      StatusBar.styleDefault();
		    }
		  });
	}

})();