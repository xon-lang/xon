// {
//   "roots": ["<rootDir>/packages"],
//   "testMatch": ["**/*.test.ts"],
//   "transform": {
//     "^.+\\.ts$": "ts-jest"
//   },
//   "moduleNameMapper": {
//   "~/(.*)": "<rootDir>/src/$1"
// }
// }
import {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '#(.*)': '<rootDir>/packages/$1',
  },
  modulePaths: ['<rootDir>'],
  moduleFileExtensions: ['js', 'json', 'ts', 'd.ts'],
  testMatch: ['**/*.test.ts'],
  transform: {'^.+\\.ts$': 'ts-jest'},
  roots: ['<rootDir>/packages'],
};

export default config;
