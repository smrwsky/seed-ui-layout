const packageJson = require('./package.json');

const packageName = packageJson.name;

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx,js}',
    '!**/*.namespace*',
    '!**/*/index*',
    '!**/*/test-utils*',
  ],
  coverageDirectory: '<rootDir>/coverage',
  displayName: packageName,
  globals: {
    'process.env': {
      NODE_ENV: 'test',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/jest.file-transformer.js',
  },
  name: packageName,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],
};
