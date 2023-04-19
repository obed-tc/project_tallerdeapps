import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { ConfigDatosApp } from 'src/Configuracion/config';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class EventosService {
  public token:string='';
  constructor(
    private storage: Storage,
    private http: HttpClient,
    private config: ConfigDatosApp


  ) {


     }
         }







