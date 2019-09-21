import { Component, OnInit } from '@angular/core';
import {PostHandlerService} from '../../post-handler.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  constructor(private postHandlerService: PostHandlerService) { }
   obj: any = {};
  ngOnInit() {
    window.scrollTo(0, 0); 
    this.postHandlerService.getPostData().subscribe((data) => {
        // console.log(data);
        this.obj = data;
      
    });
  }

}
