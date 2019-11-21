import { InjectionToken } from '@angular/core';

const appConfig = {
  title: 'my application',
};
export type AppConfig = typeof appConfig;

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig', {
  providedIn: 'root',
  factory: () => appConfig,
});