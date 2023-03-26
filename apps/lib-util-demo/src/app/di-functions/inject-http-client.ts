import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

export function injectHttpClient(): HttpClient {
  return inject(HttpClient);
}
