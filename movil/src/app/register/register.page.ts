import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  formularioregistro: FormGroup;

  constructor(private fb: FormBuilder , private servicio: ApiService ,private route : Router ) { }

 ngOnInit(){
    this.formularioregistro = this.fb.group({
      username :['',Validators.required],
      email :['',[Validators.required]],
      password :['',Validators.required]
    });
  }
  register(form: FormGroup){
    this.servicio.register(form.value.username, form.value.email,form.value.password).subscribe(data=>{
      console.log(data);
    });
  }

}
