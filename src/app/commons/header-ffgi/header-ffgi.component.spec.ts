import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFfgiComponent } from './header-ffgi.component';

describe('HeaderFfgiComponent', () => {
  let component: HeaderFfgiComponent;
  let fixture: ComponentFixture<HeaderFfgiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFfgiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFfgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
