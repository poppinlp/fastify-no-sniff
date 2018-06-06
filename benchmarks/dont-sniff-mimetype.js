const fastify = require('fastify');
const noSniff = require('dont-sniff-mimetype');
const { host, port, path, rsp } = require('./config');

fastify()
	.use(noSniff())
	.get(path, (request, reply) => {
		reply.send(rsp);
	})
	.listen(port, host);
