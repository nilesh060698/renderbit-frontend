import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {PostHandlerService} from '../../post-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnChanges { 
  @Input()  selectedData: any;
  posts: any = {};
  pages: any=[];
  number: any;
  step: any;
  pageHandler(page: any) {
    // console.log(page);
    window.scrollTo(0, 0);
    this.posts = this.selectedData.slice( (page - 1) * 8, page * 8);
    
  } 
  openPostHandler(title: any,author: any,description: any, id: any) {
    const obj: any = {};
    obj._id = id;
    obj.title = title;
    obj.author = author;
    obj.description = description;
    this.postHandlerService.updatePostData(obj);
    this.router.navigate([`/${obj.author}/${obj.title}`]);
    
  }
  constructor(private postHandlerService: PostHandlerService, private router: Router) {  }
  ngOnChanges() {
    this.selectedData.reverse();
    this.posts = this.selectedData.slice(0,7);
    // console.log(this.posts);
    // console.log(this.selectedData);
    this.number = Math.ceil(this.selectedData.length / 8);
    for(let i = 1 ; i <= this.number ;i ++ ) {
      this.pages.push(i);
    }
  }

}
