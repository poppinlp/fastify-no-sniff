const fastify = require('fastify');
const noSniff = require('../src/index');
const { host, port, path, rsp } = require('./config');

fastify()
	.register(noSniff)
	.get(path, (request, reply) => {
		reply.send(rsp);
	})
	.listen(port, host);
