import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegionService } from '../_services/region.service';
import {StorageService} from '../_services/storage.service';

@Component({
  selector: 'app-detailregion',
  templateUrl: './detailregion.component.html',
  styleUrls: ['./detailregion.component.css']
})
export class DetailregionComponent  implements OnInit {


  afficherSite:any;
  id:number = 0;
  regioncontenu:any;
  contenucom:any;
  user:any;

  constructor(private route:ActivatedRoute,private router: Router,private regionService:RegionService,private storageService: StorageService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    console.log("identdiant"+this.id)
    this.regionService.siteTouristiqueParRegion(this.id).subscribe(data=>{
         this.afficherSite = data;
         console.log("hgjkfghjk"+this.afficherSite)
    });
    this.regionService.RegionParId(this.id).subscribe(data=>{
      this.regioncontenu = data.data.coderegions;
 console.log("region cont"+this.regioncontenu)
 });
 this.user = this.storageService.getUser().id;
 console.log("dfghjkidenti"+this.user)
}


AjouterComm(){
  console.log(this.user);
  console.log(this.id);
  this.regionService.ajouterCommentaire(this.contenucom,this.user,this.id).subscribe(data=>{
    this.regioncontenu = data;
  console.log("region cont"+this.regioncontenu)
  });
}



   
 
}
