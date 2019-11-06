import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { TipoMovimientoModel } from '../models/tipoMovimiento.model';

@Injectable({
  providedIn: 'root'
})
export class FinanzasMantenimientoService {

  private url = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getTipoMovimiento(){

  return this.http.get( `/tipoMovimiento/listarAll`)
                  .pipe(
                    map (  this.crearArreglo)
                  );
  
  }

  getNaturaleza(){
  
    return this.http.get(`/naturaleza`)

  }

  private crearArreglo (tipoMovimientoObj: object)
  {
    const tipoMovimientos: TipoMovimientoModel[]=[];
    
    if(tipoMovimientoObj === null){return [];}

    Object.keys( tipoMovimientoObj).forEach( key =>{
      const tipoMovimiento: TipoMovimientoModel = tipoMovimientoObj[key];
      tipoMovimientos.push(tipoMovimiento);
    })
  console.log(tipoMovimientos);
   return tipoMovimientos; 
  }
}
