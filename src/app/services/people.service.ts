import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {People} from '../models/people.models';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private url = environment.base_url + 'people';


  constructor(private http: HttpClient) {
  }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(this.url);
  }
}
