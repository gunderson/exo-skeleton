define(function (require, exports, module) {

	// main app container.
	// doesn't do anything except serve as a receptacle for other views.

	var Backbone = require("backbone");
	require("backbone.layoutmanager");

	var View = Backbone.View.extend({
		initialize: function () {
			this.onTouchStart = _.bind(this.onTouchStart, this);
			this.onTouchMove  = _.bind(this.onTouchMove, this);
			this.onTouchEnd   = _.bind(this.onTouchEnd, this);
			this.onWheel      = _.bind(this.onWheel, this);
			$body.on('wheel', this.onWheel);
			$(document).on('keydown', this.onKeyPress);
			$(document).on('touchstart', this.onTouchStart);
			$(document).on('touchend', this.onTouchEnd);
		},
		afterRender: function() {
			console.log('afterRender')
		},
		transitionIn: function(){

		},
		transitionOut: function(persist){

		},
		serialize: function () {
			return _.extend({}, app.copy);
		},

		// event handling
		deltaXTouch: 0,
		deltaYTouch: 0,
		touchStartX: 0,
		touchStartY: 0,
		onTouchStart: function(e){
			var oe = e.originalEvent;
			var touches = oe.touches;
			e.preventDefault();
			if (touches.length > 1) return;
			this.deltaXTouch = 0;
			this.deltaYTouch = 0;
			this.touchStartX = touches[0].pageX;
			this.touchStartY = touches[0].pageY;
			$(document).on('touchmove', this.onTouchMove);
		},
		onTouchMove: function(e){
			var oe = e.originalEvent;
			var touches = oe.touches;
			e.preventDefault();
			if (touches.length > 1) return;
			this.deltaXTouch = touches[0].pageX - this.touchStartX;
			this.deltaYTouch = touches[0].pageY - this.touchStartY;
		},
		onTouchEnd: function(e){
			var oe = e.originalEvent;
			var touches = oe.touches;
			e.preventDefault();
			if (touches.length > 0) return;
			if (this.deltaYTouch > 10) {
				app.router.nextPage();
			} else if (this.deltaYTouch < -10) {
				app.router.prevPage();
			}
			$(document).off('touchmove', this.onTouchMove);
		},
		onWheel: function(e){
			if (this.transitioning) return;
			if (e.originalEvent.deltaY < 0){
				app.router.nextPage();
			} else {
				app.router.prevPage();
			}
		},
		onKeyPress: function(e){
			switch (e.keyCode){
				case 13:
				case 37:
				case 38:
					e.preventDefault();
					app.router.nextPage();
					break;
				case 39:
				case 40:
					e.preventDefault();
					app.router.prevPage();
					break;
			}
		}

	});

	return View;
});