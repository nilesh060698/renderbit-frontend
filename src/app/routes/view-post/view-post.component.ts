import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from '../../authorization.service';
import {Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
   obj = [];
   obj1: any = {};
   author: any;
   private currentRoute: string;
  constructor(private _authService :AuthorizationService, private router: Router,location: Location) { 
    this.currentRoute = location.path();
    this.author = `${this.currentRoute}`;
    this.author = this.author.split('/')
    // console.log(this.author);
    this.obj1.username = this.author[2] 
    this._authService.postWithBody('userPost', this.obj1).subscribe((data: any) =>{ // console.log(data);
      this.obj = data.doc;
    });
  }

  ngOnInit() {
     
  }

}
