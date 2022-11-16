import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service'

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined; //trouvé ou pas

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonservice: PokemonService
    ) { }
  //ActivatedRoute : service permettant d'acceder à la route courante

  ngOnInit(){

    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    /**graçe à ActivatedRoute, j'utilise les propriétes snapshot et paramMap
     * snapshot> avoir la donnée à l'instant T
     * paramMap > E de paramètres qui sont transmis sous forme de ce qui s'appelle un paramMap (tableau de paramètres)
     * .get > permet de récupérer un élemnt de cette liste de donnée (ici l'id)
     */

    if(pokemonId){

      this.pokemon = this.pokemonservice.getPokemonById(+pokemonId)
      /**Attribuer à notre propriété "pokemon", le pokemon qui à l'id
       * = à celui que m'a demandé User via l'Url
       */
    }
  }

  goToPokemonList(){

      this.router.navigate(['pokemons'])
  }

}
