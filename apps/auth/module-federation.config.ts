import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'auth',
  exposes: {
    './AuthModule': 'apps/auth/src/app/auth/auth.module.ts',
  },
};

export default config;
