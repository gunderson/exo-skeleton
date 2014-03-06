define(function (require, exports, module) {

	// main app container.
	// doesn't do anything except serve as a receptacle for other views.

	var Backbone = require("backbone");

	var View = Backbone.View.extend({
		afterRender: function(){
			this.$(".img-holder").each(function(i, el){
				var $el = $(el);
				$el.css({
					backgroundImage: "url(" + $el.data('src') + ")"
				});
			});
		},
		transitionIn: function(direction){
			direction = direction || 1;
			app.router.inTransition = true;
			var $parent = this.$el.parent();
			var _this = this;
			$parent.css({
				y: (direction * 100) + "%",
				zIndex: 2
			},0).stop().transition({
				y: 0
			}, 1015, "easeOutExpo", function(){
				app.router.inTransition = false;
				$parent.css({
					zIndex:1
				});
				_this.afterTransitionIn();
			});
		},
		afterTransitionIn: function(){},
		transitionOut: function(direction, persist){
			direction = direction || 1;
			var $parent = this.$el.parent();
			var _this = this;
			$parent.css({
				y: 0
			}).stop().transition({
				y: (direction * 50) + "%"
			}, 1000, "easeOutExpo", function(){
				$parent.css({
					zIndex:0
				});
				_this.afterTransitionOut();
			});
		},
		afterTransitionOut: function(){}
	});

	return View;
});