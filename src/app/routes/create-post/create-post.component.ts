import { Component, OnInit, OnDestroy,Output } from '@angular/core';
import {AuthorizationService} from '../../authorization.service';
import {Router} from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit, OnDestroy {

 user: any;
 access: any;
 obj: any = {}
  constructor( private _authService :AuthorizationService, private router: Router ) {}
  onSubmit(form: NgForm) {
     const obj: any ={};
     obj.author = this.user;
     obj.title  = form.value.title;
     obj.content = form.value.content;
     // console.log(obj);
     
     this._authService.postWithBody('createPost',obj).subscribe((data: any) => { 
        // console.log(data); 
      });
     form.value.title = '';
     form.value.content = '';
     form.reset();
  }

  ngOnInit() {
    this._authService.postJWTWithBody('', this.obj).subscribe((data: any) =>{ 
      // console.log(data);
      this.access = data.access;
      this.user = data.authdata.user.username;
    });
  }
  ngOnDestroy() {
    
  }
}
