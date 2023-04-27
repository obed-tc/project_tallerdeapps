import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../servicios/login.service';
import { ConfigDatosApp } from '../../Configuracion/config';
import { MensajesService } from '../proveedores/mensajes.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public netStatus: string;
  public logueo: LogueoDatos;
  public submitted: boolean;
  constructor(
    private config: ConfigDatosApp,
    private loginSvr: LoginService,
    private msjSrv: MensajesService,
    private router: Router,
    private storage: Storage,
    private barcodeScanner: BarcodeScanner
  ) {
    /*this.logueo = {
      user: { valor: 'carlos', validez: this.config._VACIO },
      pass: { valor: 'carlos', validez: this.config._VACIO }
    };*/

    this.submitted = false;
  }

  eventos(){
    this.router.navigateByUrl('/eventos');
  }
  public ingresar(form: NgForm): void{


  }
}

interface LogueoDatos{
   user: Datos;
  pass: Datos;
}
interface Datos{
  valor?: string;
  validez?: string;
}
