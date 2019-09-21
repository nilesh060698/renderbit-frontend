import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostHandlerService {
  private postsData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() { }
  updatePostData(data) {
    this.postsData.next(data);
  }
  getPostData() {
    return this.postsData.asObservable();
  }

}
