import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
		this.apiService.get().subscribe((data: any[])=>{  
			console.log(data);  
		 this.events = data.items;
     console.log(this.events)  
		})  
	}

}
