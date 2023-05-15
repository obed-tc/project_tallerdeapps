import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  formulariologin: FormGroup;

  constructor(private fb: FormBuilder , private servicio: ApiService ,private route : Router ) { }
  ngOnInit() {
    this.formulariologin=this.fb.group({
      username: ['', [Validators.required]],
      password:['',Validators.required]
    } );
  }
  login(formLogin: FormGroup) {
    if (formLogin.valid) {
      this.servicio.login(formLogin.value.username, formLogin.value.password).subscribe(
        (data: any) => {
          console.log(data);
          if (data) {
            this.route.navigate(['/perfil']);
           }
        },
        (error: any) => {
          console.error('Error de inicio de sesión:', error);
        }
      );
    }
  }

}
