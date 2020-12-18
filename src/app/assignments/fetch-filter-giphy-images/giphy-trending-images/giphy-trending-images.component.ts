import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GiphyService } from 'src/app/appServices/giphy.service';

@Component({
  selector: 'app-giphy-trending-images',
  templateUrl: './giphy-trending-images.component.html',
  styleUrls: ['./giphy-trending-images.component.scss']
})
export class GiphyTrendingImagesComponent implements OnInit, OnDestroy {

  giphyImages: [] = [];
  subscription: Subscription;

  constructor( private giphyService: GiphyService ) { }

  ngOnInit() {
    this.giphyService.getGiphyTrendingImages();
    this.subscription = this.giphyService.getGiphyGifs().subscribe( (response) => {
      this.giphyImages = response;
      console.log('trending img', response);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
