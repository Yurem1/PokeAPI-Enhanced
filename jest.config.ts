import type { Config } from 'jest';

const config: Config = {
  transform: {
    '^.+\\.ts?$': ['ts-jest', { useESM: true }]
  },
  extensionsToTreatAsEsm: ['.ts'],
};

export default config;
