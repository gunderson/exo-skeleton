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
		el: "#home",
		playing: false,
		parallax: null,
		// built-in functions
		initialize: function(){
			this.onEnterFrame = _.bind(this.onEnterFrame, this);

		},
		beforeRender: function(){
			Page.prototype.afterRender.call(this);
			this.parallax = new ParallaxImage({
				el: this.$('.pane-a .parallax-image'),
				keylayer: 0
			});
			this.insertViews([this.parallax]);
		},
		afterTransitionIn: function(){
			this.play();
		},
		afterTransitionOut: function(){
			this.stop();
		},
		play: function(){
			this.playing = true;
			this.onEnterFrame();
			this.parallax.play();
		},
		onEnterFrame: function(){
			if (!this.playing) return;
			$(".scrolling").each(function(i, el){
				var $el = $(el),
					dx = parseFloat($el.data('dx')) || 0,
					dy = parseFloat($el.data('dy')) || 0;
				$el.css({
					backgroundPositionX: "+=" + dx + "px",
					backgroundPositionY: "+=" + dy + "px"
				});
			});
			window.requestAnimationFrame(this.onEnterFrame);
		},
		stop: function(){
			this.playing = false;
			this.parallax.stop();
		}
	});

	return View;

});
