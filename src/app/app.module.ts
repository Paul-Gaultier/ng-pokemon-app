import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'//importation de FormsModule
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { HttpClientModule } from '@angular/common/http';//import du client HttpClientModule
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; //importation de la méthode HttpClientMemoryWebModule
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [//liste de tous les composants, les directives, les pipes appartenant au module
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [//déclaration de tous les elemnts (venues d'autres fichiers) dont on a besoin dans notre module
    BrowserModule,
    FormsModule,
    HttpClientModule,//Récup de notre Client HttpClientModule

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    /**Nous importons ainsi le module de la librairie (in-memeory-web-api) installée pour simuler notre API-web
     * A l'intérieur nous lui passons notre service de gestion d'API InMemoryDataService
    */

    PokemonModule,//Nous relions ainsi notre module racine à son module fils pokemonModule
    AppRoutingModule,
  ],
  providers: [],//permet d'utiliser le système d'injection de dépendances d'Angular
  bootstrap: [AppComponent]//le compossant affiché sera celui entre crochet (ici le composant racine)
})
export class AppModule { }
