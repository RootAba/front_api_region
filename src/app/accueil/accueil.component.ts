
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegionService } from '../_services/region.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  afficher:any;

  constructor(private route:ActivatedRoute,private router: Router,private regionService:RegionService) {
  }

  ngOnInit() {
  
    this.regionService.afficherRegion().subscribe(data=>{
         this.afficher = data;
         console.log("Afficher region "+ this.afficher );
    });
   
  }
}
