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
  startDate = new FormControl(new Date());
  


  constructor(private apiService: ApiService) {
    
  }

  refresh(startDate:string = ""){
    this.apiService.get(startDate).subscribe((data: any) => {
      console.log(data.data);
      this.events = data.data.items;
      console.log(this.events);
    });
  }

  ngOnInit() {
    this.refresh();
    

  }
}
