import { Injectable } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private apiService: ApiService
  ) { }

  getCustomers(url: string): Observable<any> {
    console.log(url)
    return this.apiService.get(url);
  }

  addCustomer = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };
}
