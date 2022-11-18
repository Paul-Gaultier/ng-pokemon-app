import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center"> Editer {{pokemon?.name}} </h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt ="image de Pokémon">
    </p>

    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon : Pokemon | undefined //trvailler avec une 
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(){

    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
<<<<<<< HEAD
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon = pokemon);
=======
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
>>>>>>> af9ac5a (gestion_Form)
    }else{
      this.pokemon = undefined
    }
  }

}
