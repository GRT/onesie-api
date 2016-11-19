'use strict';

const status = (request, reply) => {
	return reply({status: `ok`});
};

module.exports = {
	status
};
