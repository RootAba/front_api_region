import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegionService } from '../_services/region.service';

@Component({
  selector: 'app-ajout-region',
  templateUrl: './ajout-region.component.html',
  styleUrls: ['./ajout-region.component.css']
})
export class AjoutRegionComponent {

  afficher:any;

  coderegions:any;
  nomRegion:any;
  superficie:any;
  langue:any;
  domaine:any;
  image:any;

  constructor(private route:ActivatedRoute,private router: Router,private regionService:RegionService) {
  }

  ngOnInit() {
  
   /* this.regionService.afficherRegion(this.coderegions,this.nomRegion,this.superficie,this.langue,this.domaine,this.image).subscribe(data=>{
         this.afficher = data.data;
         console.log(data);
    });*/
   
  }

}
