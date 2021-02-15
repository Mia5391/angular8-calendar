import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { ApiService } from "../api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  events = [];
  pages = 0;
  page = 0;
  totalEvents = 0;
  pageSize = 20;
  pageRange = [];
  startDate = new FormControl(new Date());
  


  constructor(private apiService: ApiService) {
    
  }

  refresh(){

    this.apiService.get(this.startDate.value.toISOString().split('T')[0], this.page, this.pageSize).subscribe((data: any) => {
      console.log(data.data);
      this.events = data.data.items;
      this.totalEvents = data.data.total;
      this.pages = Math.ceil(this.totalEvents/this.pageSize)
      this.pageRange = Object.getOwnPropertyNames(Array.from(new Array(this.pages))).slice(0,-1);
      console.log(this.events);
    });
  }

  ngOnInit() {
    this.refresh();
    

  }

}
