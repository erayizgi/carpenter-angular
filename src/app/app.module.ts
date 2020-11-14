import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WoodListComponent } from './wood-list/wood-list.component';
import { WoodListItemComponent } from './wood-list-item/wood-list-item.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { OrdersComponent } from './orders/orders.component';
import { OrderItemComponent } from './order-item/order-item.component';


@NgModule({
  declarations: [
    AppComponent,
    WoodListComponent,
    WoodListItemComponent,
    SearchComponent,
    OrdersComponent,
    OrderItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
