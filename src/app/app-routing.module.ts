import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchFilterGiphyImagesComponent } from './assignments/fetch-filter-giphy-images/fetch-filter-giphy-images.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './pages/error404/error404.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'fetch-filter-giphy-images', component: FetchFilterGiphyImagesComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
