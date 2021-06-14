import { Component, Input, OnInit } from '@angular/core';
import { Retailer } from 'src/app/models/retailer/retailer';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {

  @Input() retailer: Retailer
  @Output() newItemEvent: EventEmitter<string>

  constructor() {
    this.retailer = {} as Retailer;
    this.newItemEvent = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  deleteRetailer(name: string) {
    this.newItemEvent.emit(name);
  }

}
