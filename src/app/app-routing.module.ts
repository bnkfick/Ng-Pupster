import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //list routes from the most specific routes to least specific route
  { path: '', redirectTo: '/about', pathMatch: 'full' }, //pathMath: 'prefix' is the other possible value meaning match anything that starts with
  { path: 'about', component: AboutComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'search', component: SearchComponent },
  //wild card route must be last-it matches everything//
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DiscoverComponent,AboutComponent,SearchComponent,PageNotFoundComponent]
