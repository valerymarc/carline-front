import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';
import { GetReservations } from './components/get-reservations/get-reservations';
import { SearchVoiture } from './components/search-voiture/search-voiture';

const routes: Routes = [
  {path:'dashboard', component: AdminDashboard},
  {path:'reservation', component: GetReservations},
  {path:'recherche', component: SearchVoiture}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
