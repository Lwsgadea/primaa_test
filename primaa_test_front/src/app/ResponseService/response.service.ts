import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http: HttpClient) { }

  getResponse() {
    return this.http.get('http://localhost:3000/getRequest', {responseType: 'text'})
  }
}
