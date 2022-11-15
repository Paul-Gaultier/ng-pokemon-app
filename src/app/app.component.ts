import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//selector permet de donner un nom à notre compoant
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <h1>{{title}}</h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'Hello World';
}
