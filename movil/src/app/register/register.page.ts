import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formularioregistro: FormGroup;
  submitted = false;
  registroExitoso = false;

  constructor(
    private fb: FormBuilder,
    private servicio: ApiService,
    private route: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.formularioregistro = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  register(form: FormGroup) {
    this.submitted = true;

    if (form.valid) {
      this.servicio.register(form.value.username, form.value.email, form.value.password).subscribe(
        (data) => {
          console.log(data);
          this.registroExitoso = true;
          this.presentToast('Usuario registrado exitosamente');

        },
        (error) => {
          console.error('Error de registro:', error);
        }
      );
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 6000,
      position: 'middle',
      cssClass: 'custom-toast',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });

    toast.present();
  }
}
