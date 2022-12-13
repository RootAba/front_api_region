import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RegionsComponent } from './regions/regions.component';
import { VisiteComponent } from './visite/visite.component';
import { DetailregionComponent } from './detailregion/detailregion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    RegionsComponent,
    VisiteComponent,
    DetailregionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
