const fp = require('fastify-plugin');

const noSniff = (app, opts, next) => {
	app.addHook('onSend', (request, reply, payload, next) => {
		reply.header('X-Content-Type-Options', 'nosniff');
		next();
	});

	next();
};

module.exports = fp(noSniff, {
	fastify: '^1.0.0',
	name: 'fastify-no-sniff'
});
