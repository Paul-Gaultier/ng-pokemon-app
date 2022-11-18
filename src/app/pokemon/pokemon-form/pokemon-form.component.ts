import { Component, OnInit, Input } from '@angular/core'; //importation de la méthode Input
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']//StyleUrls pemrte d'ajouter des feuilles de style
})
export class PokemonFormComponent implements OnInit {


  @Input() pokemon: Pokemon;
  /**A l'affichage de ce Form, vous devez luui passer un  pokemon en entrée */

  types: string[];


  constructor(
    private pokemonService: PokemonService,//Injection du service
    private router: Router
  ) { }

  ngOnInit() {

    this.types = this.pokemonService.getPokemonTypeList();
  }

      hasType(type: string): boolean {

        return this.pokemon.types.includes(type)
        /**Le pokemon encours a-t-il dans ses types, le type ne paramètre */
      }

      selectType($event: Event, type: string){

          const isChecked: boolean = ($event.target as HTMLInputElement).checked; //si la page a été cochée ou non (booleen)

            if(isChecked){
                this.pokemon.types.push(type) //Ajouter le type cochée

            }else{

              const index = this.pokemon.types.indexOf(type)
              //je récupère l'index du type que User veut rétirer

              this.pokemon.types.splice(index, 1)
            }
      }

        isTypesValid(type: string): boolean{

          //si type = 1 -> empecher de décocher
          if(this.pokemon.types.length == 1 && this.hasType(type)){

            return false; //désactive la checkbox
          }

          //si type = 3 -> empecher de cocher
          if(this.pokemon.types.length > 2 && !this.hasType(type)){
            return false
          }

            return true;
      }

      onSubmit(){

          //console.log('Formulaire soumis !');
          this.pokemonService.updatePokemon(this.pokemon)
          //Je récupère le pokémon mis à jours grace à àinput et j ele passe dans ma propriété
            .subscribe((pokemon)=>this.router.navigate(['/pokemon', this.pokemon.id]));
      } 

}
