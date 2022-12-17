import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegionService } from '../_services/region.service';

@Component({
  selector: 'app-detailregion',
  templateUrl: './detailregion.component.html',
  styleUrls: ['./detailregion.component.css']
})
export class DetailregionComponent  implements OnInit {


  afficherSite:any;
  id:any;

  constructor(private route:ActivatedRoute,private router: Router,private regionService:RegionService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.regionService.siteTouristiqueParRegion(this.id).subscribe(data=>{
         this.afficherSite = data.data;
         console.log(data);
    });
   
  }
}
