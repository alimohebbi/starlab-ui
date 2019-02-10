import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, Response } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BibpubService {
  private heroesUrl = 'http://star-rep.inf.usi.ch/root/bibliography/raw/master/bibliography.bib';
  constructor( private http: Http) { }


  getBib() {

    // return this.http.get(this.heroesUrl, {responseType: 'text'});
    return this.http.request(this.heroesUrl);
  }

  private extractData(res: Response) {
    const body = res.text();
    return body || {};
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
