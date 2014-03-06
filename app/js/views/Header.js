define(function (require, exports, module) {

	var Backbone = require("backbone");
	var Page = require("views/Page");
	var ParallaxImage = require("views/ParallaxImage");
	/**
	 *
	 *  A view stub.
	 *
	 */

	var View = Backbone.View.extend({

		// template file relative to app/templates
		el: "header",
		events: {
			"click .menu-button" : "onClickMenuButton"
		},
		// built-in functions
		initialize: function(){},
		afterRender: function(){
			this.$(".img-holder").each(function(i, el){
				var $el = $(el);
				$el.css({
					backgroundImage: "url(" + $el.data('src') + ")"
				});
			});
			this.setViews({
				".parallax-image": new ParallaxImage({
					el: this.$('.parallax-image')
				})
			});
		},
		// Event Handlers
		onClickMenuButton: function(){
			$body.toggleClass("main-menu-open");
		}
	});

	return View;
});