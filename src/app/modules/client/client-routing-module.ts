import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboard } from './components/client-dashboard/client-dashboard';
import { PostVoiture } from './components/post-voiture/post-voiture';
import { MesVoitures } from './components/mes-voitures/mes-voitures';
import { UpdateVoiture } from './components/update-voiture/update-voiture';
import { ReserverVoiture } from './components/reserver-voiture/reserver-voiture';
import { VoirEnchere } from './components/voir-enchere/voir-enchere';
import { GererEncheres } from './components/gerer-encheres/gerer-encheres';
import { SearchVoiture } from './components/search-voiture/search-voiture';
import { authGuard } from '../../auth/guard/auth-guard';

const routes: Routes = [

  {
    path:'',
    canActivate: [authGuard],
    children: [
 {path:"dashboard", component: ClientDashboard},
  {path:"ajout-voiture", component: PostVoiture},
  {path:"mes-voitures", component: MesVoitures},
  {path:"voiture/edit/:id", component: UpdateVoiture},
  {path:"voiture/:id/reserver", component: ReserverVoiture},
  {path:"mes-encheres", component: VoirEnchere},
  {path:"gestion-encheres/:id", component: GererEncheres},
  {path:"recherche-voiture", component: SearchVoiture}
    ]
  }





 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
