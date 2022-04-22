import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


const endpoint = 'https://example.com/api/items';

@Injectable({
  providedIn: 'root'
}) 



export class RestService {

  constructor(private http: HttpClient) { }
  // message: string = '';

  // private handleError(error: HttpErrorResponse): any {
  //   if (error.error instanceof ErrorEvent) {
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   return throwError(
  //     'Something bad happened; please try again later.');
  // }

  // Non-typed response extraction
  // private extractData(res: Response): any {
  //   const body = res;
  //   return body || { };
  // }

  // private log(message: string) {
  //   this.message = message;
  // }

  // Non-typed response
  getItems(): Observable<any> {
    return this.http.get(endpoint);
  }

  getItemByQuery(query:string): Observable<any> {
    return this.http.get(endpoint+'?q='+query);
  }

}