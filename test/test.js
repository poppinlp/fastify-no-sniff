import test from 'ava';
import fastify from 'fastify';
import plugin from '../src/index';

test.beforeEach(t => {
	const app = fastify();

	app.get('/', (request, reply) => {
		reply.send('hello world');
	});

	t.context.app = app;
});

const mock = async (t, opts, expected) => {
	const rsp = await t.context.app.register(plugin, opts).inject({
		method: 'get',
		url: '/'
	});
	const header = rsp.headers['x-content-type-options'];

	t.is(header, expected);
};

test('should set header properly', async t => {
	await mock(t, {}, 'nosniff')
});
