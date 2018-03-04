"use strict";

module.exports = function(values) {
	return {
		questions: [
			{
				type: "list",
				name: "transporter",
				message: "Select a transporter",
				choices: [
					{ name: "TCP", value: "TCP" },
					{ name: "NATS", value: "NATS" },
					{ name: "MQTT", value: "MQTT" },
					{ name: "AMQP", value: "AMQP" },
					{ name: "Redis", value: "Redis" },
					{ name: "NATS Streaming", value: "STAN" },
					{ name: "Kafka", value: "Kafka" }
				],
				default: "TCP"
			},
			{
				type: "confirm",
				name: "needCacher",
				message: "Would you like use cache?",
				default: false
			},
			{
				type: "list",
				name: "cacher",
				message: "Select a cacher solution",
				choices: [
					{ name: "Memory", value: "Memory" },
					{ name: "Redis", value: "Redis" }
				],
				when(answers) { return answers.needCacher; },
				default: "Memory"
			},
			{
				type: "confirm",
				name: "docker",
				message: "Add Docker files?",
				default: true
			},			
			{
				type: "confirm",
				name: "lint",
				message: "Use ESLint to lint your code?",
				default: true
			},
			{
				type: "confirm",
				name: "jest",
				message: "Setup unit tests with Jest?",
				default: true
			}		
		],

		"filters": {
			".eslintrc.js": "lint",
			"test/**/*": "jest",
			".dockerignore": "docker",
			"docker-compose.*": "docker",
			"Dockerfile": "docker"
		},

		completeMessage: `
To get started:

	cd {{projectName}}
	npm run dev

		`
	};
};
