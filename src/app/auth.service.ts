import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false; // Si User connécté -> par défaut false

  redirectUrl: string; //rédiriger vers...

  login(name:string, password: string): Observable<boolean>{//connecter User

      const isLoggedIn =(name == 'pikachu' && password == 'pikachu');


      return of(isLoggedIn).pipe(//retourner le fait que User est connécté

      delay(1000),//Simuler delai de 1 seconde pour palier la lenteur d'execution du serveur

      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)//récuperer IsLoggedIn et evnir réécrire isLoggeIn
      //Mise à jour de la propriété isLoggeIn

      );

  }

  logout(){

    this.isLoggedIn = false; //donc pas connécté
  }

  constructor() { }
}
