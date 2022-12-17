import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/regions/';
const API_URl_SITE = 'http://localhost:8080/sitesite/';
@Injectable({
  providedIn: 'root'
})
export class RegionService {
  constructor(private http: HttpClient) {}

  afficherRegion(): Observable<any> {
    const data:FormData=new FormData();
    return this.http.get(API_URL + 'afficher');
  }

  ajouterRegion(file:any,activite:any): Observable<any>{
    const data:FormData=new FormData();
    data.append('file',file);
    //data.append('data',activite);
    console.log(activite)
    data.append('data', JSON.stringify(activite).slice(1,JSON.stringify(activite).lastIndexOf(']')));
    return this.http.post(API_URL + 'creation',data )
  }

  siteTouristiqueParRegion(id:number):Observable <any>{
    const data:FormData=new FormData();
    return this.http.get(API_URl_SITE + `affichersiteregion/${id}`)
  }
}
