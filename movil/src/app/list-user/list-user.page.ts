import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../servicios/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage {

  constructor(private fb: FormBuilder , private servicio: ApiService ,private route : Router ) { }
   listUser = [];

  ngOnInit() {
    this.getListUser();
  }
getListUser(){
   this.servicio.mostrar().subscribe((res: any)=>{
      console.log('lista user ',res);
      this.listUser= res;
      console.log(this.listUser);
    });
}
}
