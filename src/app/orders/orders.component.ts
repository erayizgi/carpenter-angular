import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Order} from "../order";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @Input() orders: Order[];
  term:string;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void{

  }

}
