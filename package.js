Package.describe({
	name: 'genroa:nb-admin',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: '',
	// URL to the Git repository containing the source code for this package.
	git: '',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.3.1');
	api.use('ecmascript');
	api.use('iron:router');
	api.use('blaze-html-templates');
	api.use("templating", "client");
	
	api.addFiles("declarations.js");
	api.addFiles("helpers.js");
	
	api.addFiles("admin_panel.html", "client");
	api.addFiles("admin_panel.js", "client");
	api.addFiles("admin_panel.css", "client");

	api.export("AdminPanels");
	api.export("AdminController");

	api.mainModule('nb-admin.js');
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.use('genroa:nb-admin');
	api.mainModule('nb-admin-tests.js');
});
