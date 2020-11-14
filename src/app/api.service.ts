import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Wood} from "./wood";
import {Order} from "./order";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getNearestWood(depth: number, width: number, length: number): Observable<any> {
    return this.http.get<Wood>(environment.apiUrl + 'search?depth=' + depth + '&width=' + width + '&length=' + length);
  }

  saveOrder(order: Order): Observable<any> {
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(environment.apiUrl + 'order', order);
  }

  getOrders(): Observable<any>{
    return this.http.get<Order[]>(environment.apiUrl+'order');
  }
}
