import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [//C'est ici que nous allons déclarer nos routes
  {path: '', redirectTo: '/login', pathMatch: "full"},
  {path: 'login', component: LoginComponent},//je défini le chemin de login
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
