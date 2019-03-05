import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  // private bibUrl = 'http://localhost:8000/api/publications';
  private bibUrl = 'https://alimohebbi.pythonanywhere.com/api/publications';

  constructor(private http: HttpClient) {

  }


  getBib(): Observable<any[]> {

    return this.http.get<any[]>(this.bibUrl);
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
