import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>();//flu de recherche
  pokemon$: Observable<Pokemon | any>; //flux de Pokémons

  constructor(
    private router: Router,
    private PokemonService: PokemonService
  ) { }

  ngOnInit(): void {

    //pokemons$ sera égal à mon flux de recherchers {..."a"."ab"..."abz"."ab"..."abc"...}("." reprensente le T) 
    this.pokemon$ = this.searchTerms.pipe(

      debounceTime(300),//Elimine les récherche < à 3millisecondes
      //{..."ab"..."ab"..."abc"...}

      distinctUntilChanged(), //Attendre qu'il y ai un changement dans les termes de recherche
      //{..."a"..."ab"..."abc"}

      switchMap((term: string)=>this.PokemonService.searchPokemonList(term))//je sollicite mon serveur
       //{.....pokemonList(ab)......pokemonList(abc)}

      /**
       * Ce que va faire switchMap c'est déjà:
       * me renvoyer uniquement non pas un flux qui à l'intérieur contient des Pokémons
       * MAIS directement la PokemonList Pour le terme "ab", directement la PokemonList
       * pour les termes "abc"
       * 
       * Résumé: On part d'un flux d'évènement pour arriver à un flux de données
       */
    )


  }


  search(term: string){

      this.searchTerms.next(term); //.next comme .push pour un array
      //pousser/ajouter notre Term à la liste de flux encours (searchTerm)
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon', pokemon.id]//link -> redirection
    this.router.navigate(link);
  }
}
