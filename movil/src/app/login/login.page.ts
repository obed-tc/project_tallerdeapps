import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup;
  submitted = false;
  formErrors = {
    username: '',
    password: ''
  };

  constructor(private fb: FormBuilder, private servicio: ApiService, private route: Router, private storage: Storage) {
    this.storage.create();
  }

  ngOnInit() {
    this.formulariologin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });

    this.formulariologin.valueChanges.subscribe(() => {
      if (this.submitted) {
        this.validateForm();
      }
    });
  }

  login() {
    this.submitted = true;
    this.validateForm();

    if (this.formulariologin.valid) {
      this.servicio.login(this.formulariologin.value.username, this.formulariologin.value.password).subscribe(
        (data: any) => {
          console.log(data);
          if (data) {
            this.storage.set('username', data);
            this.route.navigate(['/tabs']);
          }
        },
        (error: any) => {
          console.error('Error de inicio de sesión:', error);
        }
      );
    }
  }

  validateForm() {
    const formControls = this.formulariologin.controls;

    for (const field in formControls) {
      if (formControls.hasOwnProperty(field)) {
        this.formErrors[field] = '';

        const control = formControls[field];
        if (control.invalid && (control.dirty || control.touched)) {
          const errors = control.errors;
          for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
              this.formErrors[field] = 'Campo requerido';
            }
          }
        }
      }
    }
  }
}
