import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from "../api.service";
import {Wood} from "../wood";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  width:number;
  depth:number;
  length:number;
  result: Wood;
  @Output() woodAdded: EventEmitter<Wood> = new EventEmitter();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    console.log(this.depth);
    this.apiService.getNearestWood(this.depth, this.width, this.length).subscribe((response)=> {
      this.result = response.data;
    })
  }

  onAdd(): void{
    this.woodAdded.emit(this.result);
    this.result= undefined;
  }
}
