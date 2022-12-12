import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [

  {
    path:"",
    redirectTo:"acceuil",
    pathMatch:'full'
  },  
  {
    path:"acceuil",
    component:AccueilComponent
  },
  {
    path:"region",
    component:RegionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
