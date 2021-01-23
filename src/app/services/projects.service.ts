import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Projects} from '../models/projects.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private baseURL = environment.base_url;
  // private baseURL = 'http://localhost:8000/api/';
  // private baseURL = 'http://star-lab.ddns.net/api/';


  constructor(private http: HttpClient) {
  }

  getProjects(): Observable<Projects[]> {
    const url = this.baseURL + 'researches';
    return this.http.get<Projects[]>(url);
  }
}
