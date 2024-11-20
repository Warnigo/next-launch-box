import type { Config } from 'jest';

const config: Config = {
  // Automatically clear mock calls, instances, contexts, and results before every test
  clearMocks: true,

  // Indicates whether coverage information should be collected while executing tests
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Specifies which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  // A map from regular expressions to module names that allow stubbing out resources with a single module
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    // Handle image imports
    "\\.(gif|jpg|jpeg|png|svg)$": "<rootDir>/__mocks__/fileMock.ts",
  },

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.(ts|tsx|js)",
    "**/?(*.)+(spec|test).(ts|tsx|js)",
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;
