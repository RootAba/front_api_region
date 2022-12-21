import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/regions/';
const API_URl_SITE = 'http://localhost:8080/sitesite/';
const API_URL_COMM = 'http://localhost:8080/commentaires/'
@Injectable({
  providedIn: 'root'
})
export class RegionService {
  constructor(private http: HttpClient) { }

  afficherRegion(): Observable<any> {
    const data: FormData = new FormData();
    return this.http.get(API_URL + 'afficher');
  }

  ajouterRegion(file: any, activite: any): Observable<any> {
    const data: FormData = new FormData();
    data.append('file', file);
    //data.append('data',activite);
    console.log(activite)
    data.append('data', JSON.stringify(activite).slice(1, JSON.stringify(activite).lastIndexOf(']')));
    return this.http.post(API_URL + 'creation', data)
  }


  ajouterCommentaire(contenucom: any, user_id: any, idregion: any): Observable<any> {

    const data: FormData = new FormData();
    let comm = [
      {
        "contenucom": contenucom,
        "regions": {
          "idregion": idregion
        },
        "user": {

          "id": user_id,
        }
      }
    ];
    //data.append('data',activite);
    data.append('data', JSON.stringify(comm).slice(1, JSON.stringify(comm).lastIndexOf(']')));

    return this.http.post(API_URL_COMM + 'ajoutcommentaire', data)
  }

  ajoutRegion(file: any, coderegion: any, nomRegion: any, domaine: any, langue: any, chiffrePop: any, idPays: any, annee: any, superficie: any): Observable<any> {

    const data: FormData = new FormData();
    let region = [{
      "coderegions": coderegion,
      "domaine": domaine,
      "langue": langue,
      "nomRegion": nomRegion,
      "superficifie": superficie,
      "pays": {
        "idPays": idPays,
      },
      "population": {
        "idPop": 3,
        "annee": annee,
        "chiffrePop": chiffrePop,
      },

    }
    ]

    let don = [
      {
        "coderegions": coderegion,
        "domaine": domaine,
        "langue": langue,
        "nomRegion": nomRegion,
        "pays": {
          "idPays": idPays
        },
        "population": {
          "annee": annee,
          "chiffrePop": chiffrePop,
          "idPop": 3
        },
        "superficie": superficie
      }
    ]


    data.append('data', JSON.stringify(don).slice(1, JSON.stringify(don).lastIndexOf(']')));
    data.append('file', file);

    return this.http.post(`http://localhost:8080/regions/creation`, data)
  }


  siteTouristiqueParRegion(id: number): Observable<any> {
    const data: FormData = new FormData();
    return this.http.get(`http://localhost:8080/site/affichersiteregion/${id}`)
  }


  RegionParId(id: number): Observable<any> {
    const data: FormData = new FormData();
    return this.http.get(`http://localhost:8080/regions/regionparid/${id}`)
  }


  // Affihcer commentaire par region

  CommentaireParRegion(id: number): Observable<any> {

    const data: FormData = new FormData();
    return this.http.get(`http://localhost:8080/commentaires/affichercommentaireRegion/${id}`)
  }
}
