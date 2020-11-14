import {Component, Input, OnInit} from '@angular/core';
import {Wood} from "../wood";

@Component({
  selector: 'app-wood-list-item',
  templateUrl: './wood-list-item.component.html',
  styleUrls: ['./wood-list-item.component.css']
})
export class WoodListItemComponent implements OnInit {
  @Input() wood: Wood;
  showInputs:boolean;
  constructor() {
    this.showInputs = false;
  }
  ngOnInit(): void {
  }
w
  onEdit(){
    this.showInputs = true;
  }

  onSave(){
    this.showInputs = false;
  }

}
