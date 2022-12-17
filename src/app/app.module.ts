import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RegionsComponent } from './regions/regions.component';
import { VisiteComponent } from './visite/visite.component';
import { DetailregionComponent } from './detailregion/detailregion.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { ProfilComponent } from './profil/profil.component';
import { AjoutRegionComponent } from './ajout-region/ajout-region.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RegionsComponent,
    VisiteComponent,
    DetailregionComponent,
    LoginComponent,
    RegistrationComponent,
    ProfilComponent,
    AjoutRegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
