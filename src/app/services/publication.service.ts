import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private bibUrl = environment.base_url + 'publications';

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

  jsonToBibtex(value) {
    let out = '';
    out += '@' + value.ENTRYTYPE;
    out += '{ ';
    out += value.ID;
    for (const jdx of Object.keys(value)) {
      if (jdx !== 'ENTRYTYPE' && jdx !== 'ID') {

        out += ', \n';
        const temp = String(value[jdx]).replace(/(\r\n|\n|\r)/gm, ' ');
        out += '' + jdx + '= {' + temp + '}';
      }
    }
    out += '\n}\n';
    return out;
  }
}
