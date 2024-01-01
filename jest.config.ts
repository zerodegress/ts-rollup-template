import { Config } from '@jest/types'
export default {
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    self: '<rootDir>/src/index.ts',
  },
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', {}],
  },
  testMatch: ['**/test/**/*.ts'],
} as Config.InitialOptions
