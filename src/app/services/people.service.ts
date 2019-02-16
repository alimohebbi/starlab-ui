import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {People} from '../models/people.models';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  // private url = 'http://localhost:8000/api/people';
  private url = 'https://alimohebbi.pythonanywhere.com/api/people';

  constructor( private http: HttpClient) { }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.url);
  }
}
