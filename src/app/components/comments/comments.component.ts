import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnChanges {
 @Input() id: any;
 access: any;
 user: any;
 disabled: any;
 obj: any = {};
 commentData: any = [];
 comments: any ={};
 commentHandler(form: NgForm) {
   this.comments.text = form.value.comment;
   this.comments.user =  this.user;
   this.comments.id = this.id;
   //// console.log(this.comments);
   if(this.user) {
   this._authService.postWithBody('postComments', this.comments).subscribe((data) => {
      //// console.log(data);
   });
   this._authService.postWithBody('getComments', this.comments).subscribe((data) => {
    //// console.log(data);
    this.commentData = data.doc;
    form.reset();
 });
 }
}
  constructor(private _authService :AuthorizationService) { 


  }

  ngOnChanges() {
    this.obj.id = this.id;
    this._authService.postJWTWithBody('', this.obj).subscribe((data: any) =>{ 
        //// console.log(data);
        this.access = data.access;
        this.user = data.authdata.user.username;
        if(this.access) {
          (<HTMLInputElement> document.getElementById("comment")).disabled = false;
          (<HTMLInputElement> document.getElementById("comment")).placeholder = 'Type here to comment';
        }
    });
    this._authService.postWithBody('getComments', this.obj).subscribe((data)=> {
      //// console.log(data);
      this.commentData = data.doc;
   }); 
  }


}
