import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'search-movies', component: SearchMoviesComponent},
  {path:'movie', component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
