import { Router, RouteController } from 'meteor/iron:router';


AdminPanels = {
	_panels: {},
	addPanel: function(obj) {
		AdminPanels._panels[obj.id] = obj;
	}
};

AdminController = RouteController.extend({
	only: ["admin", "admin_panel"],
	onBeforeAction: function() {
		let panel = AdminPanels._panels[this.params.panel];
		if(this.params.panel && (!panel)) {
			this.redirect('/');
		}
		this.next();
	}
});



Router.route('/admin', {
	name: "admin",
	template: "admin_panel",
	controller: 'AdminController',
	action: function() {
		let currentPanel = Object.keys(AdminPanels._panels)[0];
		this.redirect("/admin/"+currentPanel);
	}
});


Router.route('/admin/:panel', {
	name: "admin_panel",
	template: "admin_panel",
	controller: 'AdminController',
	data: function() {
		let data= {
			currentPanel : AdminPanels._panels[this.params.panel]
		};
		return data;
	}
});