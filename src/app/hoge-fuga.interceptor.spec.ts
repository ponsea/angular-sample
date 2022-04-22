import { TestBed } from '@angular/core/testing';

import { HogeFugaInterceptor } from './hoge-fuga.interceptor';

describe('HogeFugaInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HogeFugaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HogeFugaInterceptor = TestBed.inject(HogeFugaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
