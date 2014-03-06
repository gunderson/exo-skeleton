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
		el: "#interior",

		// built-in functions
		initialize: function(){},
		beforeRender: function(){
		}
	});

	return View;
});