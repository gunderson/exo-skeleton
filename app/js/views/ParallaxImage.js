define(function (require, exports, module) {

	var Backbone = require("backbone");
	var app = require("app");

	var View = Backbone.View.extend({
		el: '.parallax-image',
		imagePrefix: "image",
		layerOffset: 0.01,
		numLayers: 3,
		$scrollingLayers: null,
		events: {
		},
		initialize: function () {
			this.onResize = _.bind(this.onResize, this);
			this.onMouseMove = _.bind(this.onMouseMove, this);
			$scrollingLayers = [];
			this.orientation = {
				deltas: {
					alpha: 0,
					beta: 0,
					gamma: 0
				},
				previous: {
					alpha: null,
					beta: null,
					gamma: null
				},
				history: {
					alpha: [0,0,0,0,0],
					beta: [0,0,0,0,0],
					gamma: [0,0,0,0,0]
				}
			};
		},

		//---------------
		// Render

		afterRender: function () {
			this.getLayers();
			this.resetMouseActivityTimeout();
		},
		serialize: function () {
			return _.extend({}, app.copy);
		},
		cleanup: function(){
			$body.off('mousemove', this.onMouseMove);
		},

		//---------------
		// View methods

		getLayers: function(){
			var _this = this;
			this.$layers = this.$(".parallax-layer");
			this.keylayer = (this.options.keylayer >= 0) ? this.options.keylayer : this.$layers.length * 0.5;
			var maxOffset = this.layerOffset * window.innerWidth;
			
			_.each(this.$layers, function(layer, i, layers){
				// var depth = i - _this.keylayer;
				var depth = layers.length - _this.keylayer;
				var width = window.innerWidth + (maxOffset * 2 * Math.abs(depth));
				// var width = window.innerWidth + (maxOffset * 2);
				var ratio = width / 1920;
				var height = 1442 * ratio;
				var $layer = $(layer);
				$layer.find('.img-holder').each(function(i, el){
					var $el = $(el);
					if ($el.hasClass("no-fill")) return;
					$el.css({
						left: (window.innerWidth * 0.5) - (width * 0.5),
						top: (window.innerHeight * 0.5) - (height * 0.5),
						position: "absolute",
						width: width,
						height: height
					});
				});
			});
		},
		play: function(){
			if (this.playing) return;
			this.playing = true;
			this.resetMouseActivityTimeout();
			$body.on('mousemove', this.onMouseMove);
		},
		stop: function(){
			this.playing = false;
			$window.off('deviceorientation');
			$body.off('mousemove', this.onMouseMove);
		},
		positionLayers: function(percentX,percentY){
			var _this = this;
			percentX = percentX || 0.5;
			percentY = 0// percentY || 0.5;
			
			// offset to center of canvas
			percentX = -2 * percentX + 1;
			percentY = -2 * percentY + 1;

			var maxOffset = this.layerOffset * window.innerWidth;
			_.each(this.$layers, function(layer, i, layers){
				var depth = i - _this.keylayer;
				var translation = "translate3d(" +(percentX * maxOffset * depth)+ "px," +(percentY * maxOffset * depth * 0)+ "px,0px)";
				$(layer).css({
					transform: translation,
					webkitTransform: translation
				});
			});
		},
		slientLoad: function(el){
		},

		//---------------
		// Event Handlers
		onResize: function(){
			this.getLayers();
		},
		onOrientationChange: function(){
		},
		onMouseMove: function(e){
			this.resetMouseActivityTimeout();
			this.positionLayers(e.pageX / window.innerWidth, e.pageY / window.innerHeight);
		},
		resetMouseActivityTimeout: function(){
			var delay = (Modernizr.touch) ? 1 : 3000;
			if (this.mouseActivityTimeout) clearTimeout(this.mouseActivityTimeout);
			$window.off('deviceorientation');
			this.mouseActivityTimeout = setTimeout(_.bind(function(){
				//added this a layer to allow more input device selection logic
				this.setOrientationSensorActive();
			}, this), delay);
		},
		setOrientationSensorActive: function(){
			if (window.DeviceOrientationEvent) {
				$window.on('deviceorientation', _.bind(this.deviceOrientationHandler, this));
			}
		},
		deviceOrientationHandler: function(event){
			event = event.originalEvent;
			var current = {
				//gamma is the left-to-right tilt in degrees
				gamma: event.gamma,

				// beta is the front-to-back tilt in degrees, where front is positive
				beta: event.beta,

				// alpha is the compass direction the device is facing in degrees
				alpha: event.alpha
			};

			var o = this.orientation;

			o.deltas = {
				alpha: current.alpha - o.previous.alpha,
				beta: current.beta - o.previous.beta,
				gamma: current.gamma - o.previous.gamma
			};
			

			o.history.alpha.push(current.alpha);
			o.history.alpha.shift();
			o.history.beta.push(current.beta);
			o.history.beta.shift();
			o.history.gamma.push(current.gamma);
			o.history.gamma.shift();


			function add(a,b){return a+b;}

			var smoothedGamma = _.reduce(o.history.gamma, add, 0) / o.history.gamma.length;
			var smoothedBeta = _.reduce(o.history.beta, add, 0) / o.history.beta.length;
			var smoothedAlpha = _.reduce(o.history.alpha, add, 0) / o.history.alpha.length;

			//Threshold for move to trigger mouse move
			if (Math.abs(o.deltas.beta) < 1){
				return;
			}
			o.previous = current;

			var maxTilt = 20;
			var newMouseX = Math.max(0, Math.min(1,((smoothedBeta + maxTilt) / maxTilt) * 0.5));
			// console.log(newMouseX);
			/*this.model.set({
				mouseX: 1-newMouseX
			});*/
			this.positionLayers(1-newMouseX, 0.5);
		}
	});

	return View;
});