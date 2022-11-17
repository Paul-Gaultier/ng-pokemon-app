import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()





export class PokemonService {

  constructor(
    private http: HttpClient
  ){}//Injection du service httpClient

    private log(response: Pokemon[] | Pokemon | undefined){
      console.table(response);
    }

    private handleError(error: Error, errorValue: any){
      console.error(error);
      return of(errorValue);
      /**Of-> transforme une donnée simple en un flux de flux de donnée */
    }


    getPokemonList(): Observable<Pokemon[]>{
      /**On retourne un flux qui va contenir les pokémons qui arriverons un tout petit peu plus-tard dans le temps 
       * (le temps d'aller chercher l'info) mais cela de façon asynchrone comme un priomisse
      */
    
          return this.http.get<Pokemon[]>('api/pokemons').pipe(


            tap((response)=> this.log(response)),
            /**Dès qu'on aura un rép et qu'on voudra y accéder,
             * mettre cette reponse dans la consoole sous forme de tableau
             * tap -> une sorte de console.log adaptée à un Observable
             */

            catchError((error)=>this.handleError(error, []))
                //catchError permet d'intercepter notre erreur
                /**En cas d'erreur, on l'affichera dans la console
                 * et on retournera cette fois-ci un tableau vide afin de ne pas faire cracher l'application
                 */
            )
        }

    getPokemonById(pokemonId: number): Observable < Pokemon | undefined> {

      return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
        tap((response)=> this.log(response)),
        catchError((error)=>this.handleError(error, []))
      )
    }

    getPokemonTypeList(): string[]{

      return [
        'plante',
        'Feu',
        'Eau',
        'Insect',
        'Normal',
        'Electrik',
        'Poison',
        'Fée',
        'Vol',
        'Combat',
        'Psy'
      ]
    }
}
