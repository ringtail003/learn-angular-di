import { InjectionToken } from '@angular/core';

const sharedToken = {
  name: 'by root',
};
export type SharedToken = typeof sharedToken;

export const SHARED_TOKEN = new InjectionToken<SharedToken>('SharedToken', {
  providedIn: 'root',
  factory: () => sharedToken,
});