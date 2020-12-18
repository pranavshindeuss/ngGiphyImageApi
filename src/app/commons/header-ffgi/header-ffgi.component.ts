import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/appServices/giphy.service';

@Component({
  selector: 'app-header-ffgi',
  templateUrl: './header-ffgi.component.html',
  styleUrls: ['./header-ffgi.component.scss']
})
export class HeaderFfgiComponent implements OnInit {

  constructor( private giphyService: GiphyService) { }

  ngOnInit() {
  }

  // Search Giph
  searchGif(searchQuery) {
    if(searchQuery != '') {
      this.giphyService.searchGif(searchQuery);
    }
  }

}
