module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ],
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  notify: true,
  resolver: "jest-pnp-resolver",
  setupFiles: [
    "react-app-polyfill/jsdom"
  ],
  setupTestFrameworkScriptFile: './src/__tests__/setup/setupEnzyme.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
  ],
  testPathIgnorePatterns: ['./src/__tests__/setup/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  watchPlugins: [
    "D:\\proyectosgithub\\fizzvr.pro\\node_modules\\jest-watch-typeahead\\filename.js",
    "D:\\proyectosgithub\\fizzvr.pro\\node_modules\\jest-watch-typeahead\\testname.js"
  ]
};
