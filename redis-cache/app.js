const redis = require('redis');
const retryStrategy = require('./libs/retry-strategy');
require('dotenv').config();
const options = {
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
};

const client = redis.createClient({
	retryStrategy: retryStrategy(options),
});

client.on('error', (err) => {
	console.error('error');
});

client.set('key', 'value', (err, value) => {
	console.log(value);
});

client.get('key', (err, value) => {
	console.log(value);
});
