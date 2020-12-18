import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyTrendingImagesComponent } from './giphy-trending-images.component';

describe('GiphyTrendingImagesComponent', () => {
  let component: GiphyTrendingImagesComponent;
  let fixture: ComponentFixture<GiphyTrendingImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyTrendingImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyTrendingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
