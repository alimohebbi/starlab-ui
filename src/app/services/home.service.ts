import {Injectable} from '@angular/core';
import {News} from '../models/news.models';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Highlight} from '../models/highlight.models';
import {Research} from '../models/research.models';
import {Collaboration} from '../models/collaboration.models';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseURL = 'https://alimohebbi.pythonanywhere.com/api/';
  // private baseURL = 'http://localhost:8000/api/';
  // private baseURL = 'http://star-lab.ddns.net/api/';


  constructor(private http: HttpClient) {
  }

  getNews(): Observable<News[]> {
    const url = this.baseURL + 'news';
    return this.http.get<News[]>(url);
  }

  getHighlights(): Observable<Highlight[]> {
    const url = this.baseURL + 'highlights';
    return this.http.get<Highlight[]>(url);
  }

  getResearches(): Observable<Research[]> {
    const url = this.baseURL + 'researches';
    return this.http.get<Research[]>(url);
  }

  getCollaborations(): Observable<Collaboration[]> {
    const url = this.baseURL + 'collaborations';
    return this.http.get<Collaboration[]>(url);
  }
}
