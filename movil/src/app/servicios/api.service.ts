import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url= "https://django-pwvr.onrender.com/api";
  constructor(private http: HttpClient , public route: Router) { }

  public login(username: string , password: string ): Observable<any>{
    return this.http.post(this.url +'/login/',{username,password});
  }
  public register(username: string,email: string,password: string): Observable<any>{
    return this.http.post(this.url+'/register/',{username,email,password});
  }
  public mostrar(){
    return this.http.get(this.url+'/mostrar');
  }
}
