import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RegionsComponent } from './regions/regions.component';
import{VisiteComponent} from './visite/visite.component';
import{DetailregionComponent} from './detailregion/detailregion.component';
import{LoginComponent} from './login/login.component';
import{RegistrationComponent} from './registration/registration.component';
import{AjoutRegionComponent} from './ajout-region/ajout-region.component'

const routes: Routes = [

  {
    path:"",
    redirectTo:"login",
    pathMatch:'full'
  },  
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
 

  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"acceuil",
    component:AccueilComponent
  },
 
  {
    path:"region",
    component:RegionsComponent
  },
  {
    path:"visite",
    component:VisiteComponent
  },

  {
    path:"detailregion/:id",
    component:DetailregionComponent
  },
  {
    path:"ajoutregion",
    component:AjoutRegionComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
