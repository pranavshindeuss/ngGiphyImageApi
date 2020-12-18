import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFfgiComponent } from './footer-ffgi.component';

describe('FooterFfgiComponent', () => {
  let component: FooterFfgiComponent;
  let fixture: ComponentFixture<FooterFfgiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFfgiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFfgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
