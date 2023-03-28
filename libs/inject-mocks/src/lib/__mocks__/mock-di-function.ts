import { ChangeDetectorRef, inject } from '@angular/core';

export const injectChangeDetectorRef = () => {
  return inject(ChangeDetectorRef);
};
