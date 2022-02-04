import { Component, OnInit } from '@angular/core';
import { BlogdataService } from '../service/blogdata.service';
import { service } from './data.model';
@Component({
  selector: 'app-blog-parts',
  templateUrl: './blog-parts.component.html',
  styleUrls: ['./blog-parts.component.css']
})
export class BlogPartsComponent implements OnInit {
  data: any;
  record:any;
  constructor(private records:BlogdataService) { }

  ngOnInit(): void {
    this.record=this.records.data;
    // console.log("working",this.record);
    // console.log(this.records.data);
  }

}
