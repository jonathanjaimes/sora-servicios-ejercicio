import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //Aquí me traigo el arreglo de personajes que está creado en el servicio.
  get personajes():any {
    return this.AppService.per;
  }

  constructor (private AppService: AppService) {

  }

  nuevo:any = {
    nombre: "Vegeta"
  }

  //Permite ejecutar el servicio AppService y con el la función que permite almacenar los objetos personaje
  agregar () {
    this.AppService.agregarPersonaje(this.nuevo)
  }

}
