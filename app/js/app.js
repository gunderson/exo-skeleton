define(function (require, exports, module) {

	var Webapp   = require('util/extensions/Webapp');
	var Tracking = require("services/Tracking");
	var Router   = require("router");
	var Backbone = require("backbone");
	var MainView = require("views/Main");
	var Header = require("views/Header");

	Tracking.init();

	window.$window = $(window);
	window.$body = $(document.body);
	window.$html = $('html');
	window.$main = $('#main');

	var app = _.extend({}, Backbone.Events);

	app.loopPages = true;


	//--------------------------------------------------------------------------------
	// Event handlers
	//--------------------------------------------------------------------------------

	app.onResize = function () {
		app.trigger('resize');
	};

	$window.on('resize', _.debounce(app.onResize, 500));

	//resize on window focus because in safari if a video starts when the window is not focused, it will not size correctly.
	$window.focus(function () {
		app.onResize();
	});

	$window.on("orientationchange", function (e) {
		app.orientationChanged = true;
		app.onResize();
	});

	app.initialize = function () {
		app.onResize();

		new Header().render();
		app.main = new MainView({el: "#main"});
		app.router = new Router();
		app.main.once('afterRender', function(){
			Backbone.history.start({
				root: app.root
			});
		});
		app.main.render();

	};

	return app;
});