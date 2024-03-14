import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pl.zonia.fun.archshowcase',
  appName: 'Showcase',
  webDir: '../apps/runtime/dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
