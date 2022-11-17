import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';//import de l'interface de notre module NPM in-memeory-web-api
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {//Implementation de l'interface dans notre service

    createDb(){

      return { POKEMONS }

    }//Par cette méthode, nous simulons ainsi une API web (= BDD avec toutes les méthodes CRUD)
}
