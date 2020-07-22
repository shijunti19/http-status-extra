const data = require('../data.json');

const { log } = console;

Object.keys(data.statusCodes).forEach((code) => {
  log(`'${code}' = '${code}',`);
});
