"use strict";

module.exports = {
	name: "greeter",

	actions: {
		
		hello() {
			return "Hello Moleculer";
		},

		welcome: {
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	}
};
