import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor() {}

}

