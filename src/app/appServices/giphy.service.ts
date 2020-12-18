import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  giphyImages = new BehaviorSubject<any>([]);

  giphyTrendingImageApi = `https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyImageApiKey}&limit=50`;

  constructor( private http: HttpClient ) { }

  getGiphyTrendingImages() {
    return this.http.get(this.giphyTrendingImageApi)
    .subscribe( (response: any) => {
      this.giphyImages.next(response.data);
    });
  }

  searchGif(searchQuery) {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${environment.giphyImageApiKey}&limit=50`)
    .subscribe( (response: any) => {
      this.giphyImages.next(response.data);
    });
  }

  getGiphyGifs() {
    return this.giphyImages.asObservable();
  }
}
