import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Software} from '../models/software.models';
import {People} from '../models/people.models';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {
  private url = environment.base_url;

  constructor(private  http: HttpClient) {
  }

  getSoftwareList(): Observable<Software[]> {
    return this.http.get<Software[]>(this.url);
  }

  getSoftware(id: number): Observable<Software[]> {
    const urlDetail = this.url + '/' + id;
    console.log(urlDetail);
    return this.http.get<Software[]>(urlDetail);
  }

  getAuthors(id: number): Observable<People[]> {
    const authorURL = this.url + '/' + id + '/authors';
    console.log(authorURL);
    return this.http.get<People[]>(authorURL);
  }

  getHtmlDetail(url: string): Observable<string> {
    console.log(url);
    url = url.replace('http', 'https');
    return this.http.get(url, {responseType: 'text'});
  }


}
