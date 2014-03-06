define(function (require, exports, module) {

	var Backbone = require("backbone");
	var Page = require("views/Page");
	var ParallaxImage = require("views/ParallaxImage");
	/**
	 *
	 *  A view stub.
	 *
	 */

	var View = Page.extend({

		// template file relative to app/templates
		el: "#exterior",

		// built-in functions
		initialize: function(){},
		beforeRender: function(){
			// this.setViews({
			// 		".pane-a": new ParallaxImage({
			// 			el: this.$('.pane-a .parallax-image')
			// 		}),
			// 		".pane-b": new ParallaxImage({
			// 			el: this.$('.pane-b .parallax-image')
			// 		}),
			// 		".pane-c": new ParallaxImage({
			// 			el: this.$('.pane-b .parallax-image')
			// 		})
			// 	}
			// );
		}

	});

	return View;

});
