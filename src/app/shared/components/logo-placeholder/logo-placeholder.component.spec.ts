import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPlaceholderComponent } from './logo-placeholder.component';

describe('LogoPlaceholderComponent', () => {
  let component: LogoPlaceholderComponent;
  let fixture: ComponentFixture<LogoPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
