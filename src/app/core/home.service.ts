import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharity } from '../interfaces/charity';
const api = '/api';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }


  loadCharity() {
    // return this.http.get<ICharity[]>('assets/db.json');
    // return this.http.get<ICharity>(`${api}/charity`)
    // return this.http.get<Array<ICharity>>(`http://localhost:3000/api/charity`)
    return this.http.get(`http://localhost:3000/api/charity`)

  }

  
}



