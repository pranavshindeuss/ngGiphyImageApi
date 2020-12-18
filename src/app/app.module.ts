import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { FetchFilterGiphyImagesComponent } from './assignments/fetch-filter-giphy-images/fetch-filter-giphy-images.component';
import { HeaderFfgiComponent } from './commons/header-ffgi/header-ffgi.component';
import { FooterFfgiComponent } from './commons/footer-ffgi/footer-ffgi.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { GiphyTrendingImagesComponent } from './assignments/fetch-filter-giphy-images/giphy-trending-images/giphy-trending-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FetchFilterGiphyImagesComponent,
    HeaderFfgiComponent,
    FooterFfgiComponent,
    HomeComponent,
    Error404Component,
    GiphyTrendingImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
