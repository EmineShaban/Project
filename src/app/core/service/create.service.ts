import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMeeting } from '../../interfaces/meeting';
const baseUrl ='http://localhost:3000/meeting';
@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<IMeeting> {
    return this.http.post<IMeeting>(baseUrl+ '/create', data, {withCredentials: true});
  }

  getAll(): Observable<IMeeting[]> {
    return this.http.get<IMeeting[]>(baseUrl);
  }
  loadMeetingById(id: string): Observable<IMeeting> {
    return this.http.get<IMeeting>(`${baseUrl}/details/${id}`, { withCredentials: true });
  }
  delete(id: string): Observable<void> {
    return this.http.post<void>(`http://localhost:3000/meeting/details/${id}/delete`, { withCredentials: true })
  }
  update(id: any, data: any): Observable<IMeeting> {
    return this.http.put<IMeeting>(`http://localhost:3000/meeting/details/${id}/edit`, {meetingId: id,text: data}, {withCredentials: true});
  }
  }

