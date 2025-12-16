import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  constructor(private http: HttpClient){}

  postVoiture(formData: any):Observable<any>{
      return this.http.post(BASE_URL+"api/client/voiture", formData, {
          headers: this.createAuthorizationHeader()
      })
  }


  getAllVoitures():Observable<any>{
      return this.http.get(BASE_URL+"api/client/voitures", {
          headers: this.createAuthorizationHeader()
      })
  }

  getMesVoitures():Observable<any>{
      return this.http.get(BASE_URL+"api/client/mesvoitures/"+StorageService.getUserId(), {
          headers: this.createAuthorizationHeader()
      })
  }


  getVoitureById(id:number):Observable<any>{
      return this.http.get(BASE_URL+"api/client/voiture/"+id, {
          headers: this.createAuthorizationHeader()
      })
   }

   updateVoiture(id:number, voitureDto):Observable<any>{
      return this.http.put(BASE_URL+"api/client/voiture/"+id, voitureDto, {
          headers: this.createAuthorizationHeader()
      })
   }


   deleteVoiture(id:number):Observable<any>{
      return this.http.delete(BASE_URL+"api/client/voiture/"+id, {
          headers: this.createAuthorizationHeader()
      })
   }

     bidVoiture(formData: any):Observable<any>{
      return this.http.post(BASE_URL+"api/client/voiture/offre", formData, {
          headers: this.createAuthorizationHeader()
      })
    }

    getMesEnchere():Observable<any>{
      return this.http.get(BASE_URL+"api/client/voiture/offre/"+StorageService.getUserId(), {
          headers: this.createAuthorizationHeader()
      })
  }

   getEnchereVoitureById(voiturId: number):Observable<any>{
      return this.http.get(BASE_URL+"api/client/voiture/" + voiturId + "/offres", {
          headers: this.createAuthorizationHeader()
      })
  }

  getStatistiques():Observable<any>{
      return this.http.get(BASE_URL+"api/client/voiture/statistique/"+StorageService.getUserId(), {
          headers: this.createAuthorizationHeader()
      })
  }

 
    updateStatutEnchere(enchereId: number, statut:string):Observable<any>{
          return this.http.get(BASE_URL+"api/client/voiture/offre/"+enchereId+"/"+statut, {
            headers: this.createAuthorizationHeader()
          });
        }

  searchVoiture(search: any):Observable<any>{
      return this.http.post(BASE_URL+"api/client/voiture/search", search, {
          headers: this.createAuthorizationHeader()
      })
    }

  createAuthorizationHeader(): HttpHeaders{
    let authHeaders: HttpHeaders =  new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer '+ StorageService.getToken()
    );
  }
}
