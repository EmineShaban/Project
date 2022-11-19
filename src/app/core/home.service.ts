import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICharity } from '../interfaces/charity';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  loadCharity() {
    return this.http.get<ICharity[]>('assets/db.json');
  }

  
}
