const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

const server = awsServerlessExpress.createServer(app, null);

exports.handler = (event, context, callback) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  context.callbackWaitsForEmptyEventLoop = false;
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
};
