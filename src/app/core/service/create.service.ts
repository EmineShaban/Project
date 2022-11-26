import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMeeting } from '../../interfaces/meeting';
const baseUrl ='http://localhost:3000/meeting/create';
@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  getAll(): Observable<IMeeting[]> {
    return this.http.get<IMeeting[]>(baseUrl);
  }
  
  }

