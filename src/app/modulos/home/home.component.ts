import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'  
})
export class HomeComponent {

  constructor(router: Router) {
    this.numero = 1;

    console.log(this.numero);
  }

  @Input() email: string = '';
  @Input() numero: number = 0;

}
