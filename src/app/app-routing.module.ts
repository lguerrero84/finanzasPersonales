import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';


const routes: Routes = [

  {path: 'home' , component: HomeComponent },
  {path: 'movimientos', component: MovimientosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
