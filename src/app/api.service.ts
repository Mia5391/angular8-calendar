import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private SERVER_URL = "https://timelyapp.time.ly/api/calendars/4243455/events";

  private query = (startDate?:string, page?:number, perPage?:number) => {
    return `${this.SERVER_URL}?start_date=${startDate}&page=${page}&per_page=${perPage}`
  }

  constructor(private httpClient: HttpClient) {}

  public get(startDate?:string, page?:number, perPage?:number) {
    return this.httpClient.get(this.query(startDate, page, perPage));
  }
}
