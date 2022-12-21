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
  idPays=1;
  chiffrePop:any;
  annee:any;
  file:any;
 

  constructor(private route:ActivatedRoute,private router: Router,private regionService:RegionService) {
  }

  ngOnInit() {
  
   /* this.regionService.afficherRegion(this.coderegions,this.nomRegion,this.superficie,this.langue,this.domaine,this.image).subscribe(data=>{
         this.afficher = data.data;
         console.log(data);
    });*/
   
  }
  envoyerImage(event:any){
    this.file = event.target["files"][0];
    console.log(this.file);
  }
  onSubmit():void{
    this.regionService.ajoutRegion(this.file,this.coderegions,this.nomRegion,this.domaine,this.langue,this.chiffrePop,this.idPays, this.annee,this.superficie).subscribe(data=>{
     console.log("nom region : "+this.nomRegion)
      console.log(data);
 });

 //this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }
}
