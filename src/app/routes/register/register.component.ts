import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthorizationService} from '../../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
message: string;
onSignUp(form: NgForm) {
  const obj: any = {};
  obj.username = form.value.username;
  obj.email = form.value.email;
  obj.password = form.value.password;
  // // console.log(typeof form.value.password);
  var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/gi;
  let str = form.value.password;
  if(str.match(specialChars)===null) {
    var count  = 0;
  } else {
  count = str.match(specialChars).length;
  }
  // // console.log(count);
  if(count < 1 || str.count < 8) {
    this.message = "your password must contain 8 characters with 1 special Character";
  } else {
      this._authService.postWithBody('register', obj).subscribe((data) =>{
    this.message = data.message;
    if(data.access) {
      localStorage.setItem('token', data.token);
      this.router.navigate(['/']);
    }
    
  }); 

  }
 

}
constructor( private _authService :AuthorizationService , private router: Router ) { }

  ngOnInit() {
  }

}
