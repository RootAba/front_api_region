import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegionService } from '../_services/region.service';
import {StorageService} from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent {

  formulaire!:FormGroup;

 
    coderegions:any;
    nomRegions:any;
    domaine:any;
    langue:any;
    idPays=1;
    chiffrePop:any;
    annee:any;
    superficie:any;
    file:any
  
  afficher:any;
  id:any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  showAdminBoard = false;
  constructor(private route:ActivatedRoute,private router: Router,private regionService:RegionService,private authService: AuthService,private storageService: StorageService) {
  }

  ngOnInit() {
  
    this.regionService.afficherRegion().subscribe(data=>{
         this.afficher = data;
         console.log(data);
    });
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      // faites quelque chose avec l'identifiant ici
    });

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    }
  }



  sub():void{
    console.log("fghjkl"+this.coderegions)
  }

  goToDetailTirage(id:number){
    console.log(id);
    return this.router.navigate(['/detailregion',id])
   
  }

  Click():void{
    this.id = this.afficher.data.id;
    this.router.navigate(['/detailregion',this.id]);
  }
}





 