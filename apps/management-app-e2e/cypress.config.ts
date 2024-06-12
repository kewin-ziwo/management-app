import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run management-app:serve:development',
        production: 'nx run management-app:serve:production',
      },
      ciWebServerCommand: 'nx run management-app:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
