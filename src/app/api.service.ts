import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private SERVER_URL = "https://timelyapp.time.ly/api/calendars/4243455/events";

  private query = (startDate?:string) => {
    return `${this.SERVER_URL}?start_date=${startDate}`
  }

  constructor(private httpClient: HttpClient) {}

  public get(startDate?:string) {
    return this.httpClient.get(this.query(startDate));
  }
}
