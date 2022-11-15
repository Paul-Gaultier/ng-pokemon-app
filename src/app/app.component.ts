import { Component, OnInit } from '@angular/core'; //importation de notre interface OnInit

@Component({
  selector: 'app-root',


  template: `
    <h1>{{pokemonList[1]}}</h1>
  `,
  styles: []
})
export class AppComponent implements OnInit{//implementation de notre interface au niveau de notre composant

  //propriété pokemon
  pokemonList = ['Bulbizarre','Salamèche','Carapuce'];

    ngOnInit(): void {//def de la méthode associée à notre nouvelle interface (Oninit)
  
      console.table(this.pokemonList);//Une table de Pokemons dans notre console
      //this. nous permet d'acceder à la propriété de notre classe,c-a-d PokemonList autrement Angular ne sais pas de quoi il s'agit
  }
}
