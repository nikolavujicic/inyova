import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Options, Customer } from '@src/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url) as Observable<T>;
  }

  post<T>(url: string, body: Customer, options: Options): Observable<T> {
    return this.httpClient.post<T>(url, body, options) as Observable<T>;
  }
}
