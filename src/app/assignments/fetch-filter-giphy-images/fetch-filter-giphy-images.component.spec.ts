import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchFilterGiphyImagesComponent } from './fetch-filter-giphy-images.component';

describe('FetchFilterGiphyImagesComponent', () => {
  let component: FetchFilterGiphyImagesComponent;
  let fixture: ComponentFixture<FetchFilterGiphyImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchFilterGiphyImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchFilterGiphyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
