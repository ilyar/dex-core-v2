const config = require('./jest.config');

config.verbose = true;
config.testEnvironment = '@ton/sandbox/jest-environment';
config.reporters = [
    'default',
    ['@ton/sandbox/jest-reporter', {}],
];

module.exports = config;
