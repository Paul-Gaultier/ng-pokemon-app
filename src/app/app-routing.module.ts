import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [//C'est ici que nous allons déclarer nos routes
  {path: '', redirectTo: '/pokemons', pathMatch: "full"},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
