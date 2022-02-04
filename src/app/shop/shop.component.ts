import { Component, OnInit } from '@angular/core';
import { ShopdataService } from '../service/partner/shopdata.service';
import { service } from './data.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  data: any;
  record:any;
  constructor(private records:ShopdataService) { }

  ngOnInit(): void {
    this.record=this.records.list;
        // console.log(this.records.list);
  }
  // filter
  Filter(event:any){
    this.record.filter=event.target.value;
    console.log(this.record.filter)
  }
}
