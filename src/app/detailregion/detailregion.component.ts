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
  commentaie:any;
  nombrecom:any

  constructor(private route:ActivatedRoute,private router: Router,private regionService:RegionService,private storageService: StorageService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    console.log("identdiant"+this.id)
    this.regionService.siteTouristiqueParRegion(this.id).subscribe(data=>{
         this.afficherSite = data;
         console.log(this.afficherSite)
    });
    
    this.regionService.RegionParId(this.id).subscribe(data=>{
      console.log(data)

      this.regioncontenu = data;
    console.log("region cont "+this.regioncontenu)
    });

    this.user = this.storageService.getUser().id;
    console.log("dfghjkidenti"+this.user)


    this.regionService.CommentaireParRegion(this.id).subscribe(data=>{
      this.commentaie = data;
      console.log("Mes Commentaires")

      console.table(this.commentaie)
      this.nombrecom = this.commentaie.length;

    });
}


AjouterComm(){
  console.log(this.user);
  console.log(this.id);
  this.regionService.ajouterCommentaire(this.contenucom,this.user,this.id).subscribe(data=>{
    this.regioncontenu = data;
  console.log("region cont"+this.regioncontenu)
  });
this.reloadPage();

}

 reloadPage(): void {
    window.location.reload();
  }

   
 
}
