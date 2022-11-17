import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service'

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
    ){}



  ngOnInit(){

    this.pokemonService.getPokemonList()//Je récupère un Observable depuis mon service,
    .subscribe(pokemonList => this.pokemonList = pokemonList);//subscribe -> je m'abonne à cett Observable( = je regarde ce qu'il fait)
    //dans mon abonnement, je récupère la pokemonList et je la pousse dans la propriété de mon Composant
    
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
  
}
