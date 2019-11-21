import { InjectionToken } from '@angular/core';

export interface UiConfig {
  theme: string;
}
export const UI_CONFIG = new InjectionToken<UiConfig>('UiConfig');