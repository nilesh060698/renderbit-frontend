import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  baseUrl ='http://localhost:3000';
  constructor( private  _http : HttpClient) {  }
  postWithBody(relativeUrl: string, body: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // console.log(body);
    return this._http.post<any>(this.baseUrl + '/' + relativeUrl, JSON.stringify(body), httpOptions );
  }

  postJWTWithBody(relativeUrl: string, body: any) {
    if (localStorage.getItem('token')) {
      var JWTtoken = localStorage.getItem('token');
    } else {
      JWTtoken = 'hello world';
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + JWTtoken
      })
    };
 
    return this._http.post<any>(this.baseUrl + '/' + relativeUrl, JSON.stringify(body), httpOptions);
  }


}
