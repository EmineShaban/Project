import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICharity } from '../interfaces/charity';


const charityInfo = "http://localhost:3000/charity"

@Injectable({
  providedIn: 'root'
})
export class CharityService {

  constructor(private http: HttpClient) { }


  loadCharity() {
    return this.http.get<ICharity[]>(charityInfo);
    // return this.http.get<ICharity>(`${api}/charity`)
    // return this.http.get<Array<ICharity>>(`http://localhost:3000/api/charity`)
    // return this.http.get(`http://localhost:3000/api/charity`)

  }
}
