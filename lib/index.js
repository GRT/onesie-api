'use strict';

const controllerDir = '../lib/controllers';
const joi = require('joi');

exports.register = (server, options, next) => {
  server.log(['server'], 'adding routes');
  server.route({
    method: 'GET',
    path: '/status',
    handler: require(`${controllerDir}/status`).status
  });

  server.route({
    method: 'POST',
    path: '/login',
    config: {
      validate: {
        payload: joi.object().keys({
          username: joi.string().min(3).max(32).required(),
          password: joi.string().min(8).max(64).required()
        })
      }
    },
    handler: require(`${controllerDir}/login`).login
  });

  return next();
};

exports.register.attributes = {
  name: 'onesieApi',
  version: '1.0.0'
};
