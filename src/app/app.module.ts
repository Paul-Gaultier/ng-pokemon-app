import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'//importation de FormsModule
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module'

@NgModule({
  declarations: [//liste de tous les composants, les directives, les pipes appartenant au module
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [//déclaration de tous les elemnts (venues d'autres fichiers) dont on a besoin dans notre module
    BrowserModule,
    FormsModule,
    PokemonModule,//Nous relions ainsi notre module racine à son module fils pokemonModule
    AppRoutingModule,
  ],
  providers: [],//permet d'utiliser le système d'injection de dépendances d'Angular
  bootstrap: [AppComponent]//le compossant affiché sera celui entre crochet (ici le composant racine)
})
export class AppModule { }
