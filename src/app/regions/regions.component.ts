import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegionService } from '../_services/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent {


  afficher:any;
  id:any;

  constructor(private route:ActivatedRoute,private router: Router,private regionService:RegionService) {
  }

  ngOnInit() {
  
    this.regionService.afficherRegion().subscribe(data=>{
         this.afficher = data.data;
         console.log(data);
    });
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      // faites quelque chose avec l'identifiant ici
    });
  }

  Click():void{
    this.id = this.afficher.data.id;
    this.router.navigate(['/detailregion',this.id]);
  }
}
