define(function (require, exports, module) {

	require('modernizr');
	require('conditionizr');

	var Backbone = require('backbone');
	require("backbone.layoutmanager");
	var Home     = require('views/Home');
	var Interior = require('views/Interior');
	var Exterior = require('views/Exterior');
	var Tracking = require('services/Tracking');


	// Defining the application router, you can attach sub routers here.
	var Router = Backbone.Router.extend({
		currentPage: "",
		transitionDirection: 0,
		inTransition: false,
		views:{},
		routes: {
			"home"     : "home",
			"interior" : "interior",
			"exterior" : "exterior",
			'*path'    : 'unknown'
		},
		initialize:function(){
			this.views.home     = new Home();
			this.views.interior = new Interior();
			this.views.exterior = new Exterior();
			app.main.insertViews({
				"#home"     : this.views.home,
				"#interior" : this.views.interior,
				"#exterior" : this.views.exterior
			});
			// app.main.render();
		},

		unknown: function(route){
			console.warn("Router."+"unknown()", route);

			this.navigate("home", {
				trigger: true
			});
		},
		home: function () {
			if (this.inTransition) return;
			this.currentPage = "home";
			this.triggerTransitionOut(this.views.home);
			//TODO add loading step
			this.views.home.transitionIn(this.transitionDirection);
			$body.removeClass("main-menu-open");
			console.log("home")
		},
		interior: function(){
			if (this.inTransition) return;
			this.currentPage = "interior";
			this.triggerTransitionOut(this.views.interior);
			this.views.interior.transitionIn(this.transitionDirection);
			$body.removeClass("main-menu-open");
			console.log("interior")
		},
		exterior: function(){
			if (this.inTransition) return;
			this.currentPage = "exterior";
			this.triggerTransitionOut(this.views.exterior);
			this.views.exterior.transitionIn(this.transitionDirection);
			$body.removeClass("main-menu-open");
			console.log("exterior")
		},

		//general navigation
		nextPage: function(){
			if (this.inTransition) return;
			var routeKeys = _.keys(this.routes);
			var currentIndex = routeKeys.indexOf(this.currentPage);
			if (currentIndex === -1 || currentIndex + 1 > routeKeys.length - 2){
				if (app.loopPages){
					currentIndex = 0;
				} else {
					// do nothing
					return false;
				}
			} else {
				currentIndex++;
			}
			this.currentPage = routeKeys[currentIndex];
			this.transitionDirection = -1;
			this[this.routes[routeKeys[currentIndex]]]();
			// this.navigate(routeKeys[currentIndex], {replace:true});
		},
		prevPage: function(){
			if (this.inTransition) return;
			var routeKeys = _.keys(this.routes);
			var currentIndex = routeKeys.indexOf(this.currentPage);
			if (currentIndex === -1 || currentIndex - 1 < 0){
				if (app.loopPages){
					currentIndex = routeKeys.length - 2;
				} else {
					// do nothing
					return false;
				}
			} else {
				currentIndex--;
			}
			this.currentPage = routeKeys[currentIndex];
			this.transitionDirection = 1;
			this[this.routes[routeKeys[currentIndex]]]();
			// this.navigate(routeKeys[currentIndex], {replace:true});
		},
		getTransitionDirection: function(){
			
		},
		triggerTransitionOut: function(exceptView){
			var views = app.main.getViews().value(),
				_this = this;
			_.each(views, function(view){
				if (view === exceptView) return;
				view.transitionOut(-_this.transitionDirection);
			});
		}
	});

	return Router;

});