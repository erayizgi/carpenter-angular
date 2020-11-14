import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Wood} from "../wood";
import {Order} from "../order";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-wood-list',
  templateUrl: './wood-list.component.html',
  styleUrls: ['./wood-list.component.css']
})
export class WoodListComponent implements OnInit {
  woods: Wood[];
  order: Order;
  @Output() orderSaved: EventEmitter<Order> = new EventEmitter();
  errorMessage: string;
  constructor(private apiService: ApiService) {
    this.woods = [];
    this.order = {
      client_name: '',
      client_surname: '',
      email: ''
    }
    this.errorMessage = '';
  }

  ngOnInit(): void {

  }

  onWoodAdded(wood: Wood) {
    this.woods.push(wood);
  }

  total() {
    let sum: number = 0;
    this.woods.forEach((wood: Wood)=>{
      sum += (wood.price * wood.number);
    })
    return Intl.NumberFormat('NL',{style:'currency', currency:'EUR'}).format(sum);
  }
  saveOrder(){
    if(this.order.email.length > 3){
      this.order.products = this.woods;
      this.apiService.saveOrder(this.order).subscribe((response)=>{
        console.log('done',response);
        this.orderSaved.emit(response.data);
      });

    }else{
      this.errorMessage = 'Please enter a valid email';
    }
  }
}
