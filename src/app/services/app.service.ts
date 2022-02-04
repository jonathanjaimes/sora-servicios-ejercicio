import { Injectable } from "@angular/core";

@Injectable()
export class AppService {

    private _personajes:any = [
        {
            nombre: "Goku",
            fecha: null
        },
        {
            nombre: "Krilin",
            fecha: "si"
        }
    ]

    get per():any {
        return [...this._personajes]
    }

    contador:number = 0;

    agregarPersonaje (personaje:any) {
        this._personajes.push(personaje)

        for (const prop in this._personajes) {
            if (this._personajes[prop].fecha!=null) {
                console.log(this._personajes[prop].nombre)
                
            }
        }
        // console.log(this.contador)
    }

}