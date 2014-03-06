define(function (require, exports, module) {

	// main menu container

	var Backbone = require("backbone");

	var View = Backbone.View.extend({
		el: "#main-menu",
		initialize: function(){
		},
		afterRender: function(){
		},
		transitionIn: function(direction){
			var _this = this;
			_this.afterTransitionOut();
		},
		afterTransitionIn: function(){},
		transitionOut: function(direction, persist){
			var _this = this;
			_this.afterTransitionOut();
		},
		afterTransitionOut: function(){}
	});

	return View;
});