import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit{

  pokemonList: Pokemon[] = POKEMONS;
  //typage permettant de s'assurer que c'est bien un tab selon notre modèle qui sera envoyé dans ma propriété

  pokemonSelected: Pokemon | undefined;

    ngOnInit(): void {
      console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string){

    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id === +pokemonId)


    if(pokemon){

      console.log(`vous avez cliqué sur le pokemon ${pokemon.name}`)  


      this.pokemonSelected = pokemon

    }else{

      console.log("Vous avez demandé un pokémon qui n'existe pas");
      this.pokemonSelected = pokemon
    }

    
  }


}
