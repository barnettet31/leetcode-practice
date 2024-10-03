/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset:"ts-jest",
  testEnvironment: "node",
  rootDir:'./',
  coverageDirectory:"<rootDir>/coverage",
  collectCoverageFrom:[
    "<rootDir>/**/*.ts"
  ],
  testPathIgnorePatterns:[
    "<rootDir>/node_modules"
  ],
  coverageReporters:["json","html"],
  testMatch:["<rootDir>/**/*.test.ts"],
  coverageThreshold:{
    "global":{
      branches:90,
      functions:90,
      lines:90,
      statements:90
    }
  }
};