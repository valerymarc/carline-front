import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){}
  
  register(demandeInscription: any): Observable<any>{
    return this.http.post(API_URL + "/api/auth/inscription", demandeInscription);
  }

  login(demandeConnexion: any): Observable<any>{
    return this.http.post(API_URL + "/api/auth/login", demandeConnexion);
  }

}
