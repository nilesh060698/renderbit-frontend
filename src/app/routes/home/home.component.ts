import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../authorization.service';
import {Router} from  '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  obj = [];
  constructor(private _authService :AuthorizationService, private router: Router) { 
    this._authService.postWithBody('allPosts', this.obj).subscribe((data: any) =>{ // // console.log(data);
      this.obj = data.doc;
    });
  }
  ngOnInit() {
  }

}
