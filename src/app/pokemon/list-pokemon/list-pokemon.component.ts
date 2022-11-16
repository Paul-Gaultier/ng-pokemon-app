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
    
    
    
    
    //const PokemonService = new PokemonService()// ⚠️⚠️⚠️ Interdit
    /**
     * 3 raison pour ne pas utiliser cette méthode:
     * A- Le composant va devoir savoir comment créer pokemonService (utilisation du mot clé new)
     * Vous allez devoir passer les infos au constructeur, Donc si nous modifions par la suite le constructeurde notre service,
     * Et bien dans chaque composant où le service a été utilisé il faudra mettre à jour certaines choses et ceci n'est pas térrible
     * 
     * B-Ensuite, l'on crée une nouvelle instance du service à chaaque x que l'on tape le mot clé new.
     * On perd ainsi le mécanisme fourni par Angular qui nous grantissait une instance pour toute notre app.
     * 
     * C-Lorsque vous devppez un service, le consommateur ne doit pas se demander commet fonctionne celui-ci de l'intérieur
     */
    
    
    private pokemonService: PokemonService
    
    
    
    ){}



  ngOnInit(){

    this.pokemonList = this.pokemonService.getPokemonList();
    //notre liste est désormais fourni par notre service
    
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
  
}
