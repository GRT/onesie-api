'use strict'


exports.register = (server, options, next) => {
	server.log(['server'], {data: 'registering'});
	server.route({
		method: 'GET',
		path: '/test',
		handler: function (request, reply) {
			//request.log('request received')
			return reply('ok');
		}
	});

	return next();
}


exports.register.attributes = {
    name: 'onesieApi',
    version: '1.0.0'
};
