import { Component } from '@angular/core';
import {ApiService} from "./api.service";
import {Order} from "./order";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  orders: Order[];
  constructor(private apiService: ApiService) {

  }
  ngOnInit():void{
    this.apiService.getOrders().subscribe((response) => {
      this.orders = response.data;
    })
  }
  onOrderSaved(){
    this.apiService.getOrders().subscribe((response) => {
      this.orders = response.data;
    })
  }
}
