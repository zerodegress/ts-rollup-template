// @ts-check
/** @type {import('jest').Config} */
export default {
  moduleDirectories: [
    'node_modules'
  ],
  moduleNameMapper: {
    'self': '<rootDir>/src/index.ts'
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {}]
  },
  testMatch: ['**/test/**/*.ts']
};