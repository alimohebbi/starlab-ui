import {Injectable} from '@angular/core';
import {News} from '../models/news.models';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // private url = 'https://alimohebbi.pythonanywhere.com/api/news';
  // private url = 'http://localhost:8000/api/news';
  private url = 'http://star-lab.ddns.net/api/news';


  constructor(private http: HttpClient) {
  }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.url);
  }
}
