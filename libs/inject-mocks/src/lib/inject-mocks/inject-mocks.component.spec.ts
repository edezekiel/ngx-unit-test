import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectMocksComponent } from './inject-mocks.component';

describe('InjectMocksComponent', () => {
  let component: InjectMocksComponent;
  let fixture: ComponentFixture<InjectMocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectMocksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InjectMocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
