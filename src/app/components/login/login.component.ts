import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  obj: any = {};
  user: any = {};
  access = false;
  token: any;
  onLogIn(form: NgForm) {
  const obj: any = {};
  obj.email = form.value.email;
  obj.password = form.value.password;
  // console.log(obj);
  this._authService.postWithBody('login', obj).subscribe((data) =>{// console.log(data);
    this.access = data.access;
    this.user = data.doc[0].userName;
    localStorage.setItem('token', data.token);
  });
  }
  logout() {
    localStorage.setItem('token', 'hello world');
    this.router.navigate(['/']);
    window.location.reload();

  }
  constructor( private _authService :AuthorizationService, private router: Router ) {
    this._authService.postJWTWithBody('', this.obj).subscribe((data: any) =>{ // console.log(data);
      this.access = data.access;
      this.user = data.authdata.user.username;
    });
   }

  ngOnInit() {
  }

}
