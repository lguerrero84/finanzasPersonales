import { Component, OnInit } from '@angular/core';
import { FinanzasMantenimientoService } from '../../services/finanzas-mantenimiento.service';
import { TipoMovimientoModel } from '../../models/tipoMovimiento.model';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html'
})
export class MovimientosComponent implements OnInit {

  tipoMovimientos: TipoMovimientoModel [] =[];
  constructor(private finanzasMantenimientoService: FinanzasMantenimientoService) { }

  ngOnInit() {
    console.log('entrando al init');
    this.finanzasMantenimientoService.getTipoMovimiento().subscribe( datos =>  this.tipoMovimientos = datos);
  }

}
