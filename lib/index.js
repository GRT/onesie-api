'use strict';

const controllerDir = '../lib/controllers';

exports.register = (server, options, next) => {
	server.log(['server'], 'adding routes');
	server.route({
		method: 'GET',
		path: '/status',
		handler: require(`${controllerDir}/status`).status
	});

	return next();
}

exports.register.attributes = {
    name: 'onesieApi',
    version: '1.0.0'
};
