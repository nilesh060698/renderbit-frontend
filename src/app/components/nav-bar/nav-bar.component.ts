import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AuthorizationService } from '../../authorization.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  obj = {};
  access: any;
  user: any;
  routeHandler(pos: any) {
    this._authService.postJWTWithBody('', this.obj).subscribe((data: any) =>{ 
          // console.log(data);
          this.access = data.access;
          this.user = data.authdata.user.username;
          this.router.navigate([`/${pos}/${this.user}`])
    });
  }
  constructor(private _authService :AuthorizationService,private router: Router) {  }

  ngOnInit() { }

}
