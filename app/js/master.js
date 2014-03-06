// entry point for requirejs
define(["require_config"], function () {

	require([

		"app",
		"underscore",
		"jquery",
		"backbone",
		"jade",
		"jade_jst",
		"jquery.transit",
		"backbone.layoutmanager"

	], function (app, _, $, Backbone, jade) {

		window.jade = jade;
		window._ = _;
		window.$ = $;
		window.app = app;
		window.Backbone = Backbone;

		Backbone.Layout.configure({
			manage: true,
			fetchTemplate: function (path) {
				return JST[path];
			}
		});

		$.ajax({
			dataType: "json",
			url: "data/copy_en.json",
			async:false
		}).done(function (response) {
			app.copy = new Backbone.Model(response);
		}).fail(function (response) {
			console.error("Failed to get Site Copy: ", response.responseText);
		});
		$.ajax({
			dataType: "json",
			url: "data/constants.json",
			async:false
		}).done(function (response) {
			app.constants = response;
			app.initialize();
		}).fail(function (response) {
			console.error("Failed to get Site Constants: ", response.responseText);
		});
	});
});