import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './pokemon.service';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component'
=======
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component'
>>>>>>> 82c89c8 (création du Form)

const pokemonRoutes: Routes = [
  {path: 'edit/pokemon/:id', component: EditPokemonComponent },
  {path: 'pokemons', component: ListPokemonComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent},
]



@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
<<<<<<< HEAD
    EditPokemonComponent,
=======
>>>>>>> 82c89c8 (création du Form)
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
    /**Je vais utiliser le RouterModule fourni par Angular et 
     * je lui ajoute des routes grâce à l'option .forChild
     * et a l'intérieur je passe mes routes pokemonRoutes
     */
  ],
  providers: [ PokemonService ]//On fourni ainsi notre service au module
})
export class PokemonModule { }
