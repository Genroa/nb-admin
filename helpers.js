import { Template } from 'meteor/templating';

if(Meteor.isClient) {
	Template.registerHelper("getAdminPanels", function() {
		return Object.values(AdminPanels._panels);
	});
}