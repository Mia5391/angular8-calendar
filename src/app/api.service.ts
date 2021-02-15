import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private SERVER_URL = "https://timelyapp.time.ly/api/calendars/4243455/events";

  private eventQuery = (startDate?:string, page?:number, perPage?:number, categoryId?:number, tagId?:number) => {

    const catString = categoryId ? `&categories=${categoryId}` : ""
    const tagString = tagId ? `&tags=${tagId}` : ""

    return `${this.SERVER_URL}?start_date=${startDate}&page=${page}&per_page=${perPage}${catString}${tagString}`
  }

  private TAXONOMY_CATEGORY_QUERY = "https://timelyapp.time.ly/api/calendars/4243455/taxonomies?type=taxonomy_category&page=1&per_page=100"
  private TAXONOMY_TAG_QUERY = "https://timelyapp.time.ly/api/calendars/4243455/taxonomies?type=taxonomy_tag&page=1&per_page=100"
  constructor(private httpClient: HttpClient) {}

  public getEvents(startDate?:string, page?:number, perPage?:number, categoryId?:number, tagId?:number) {
    return this.httpClient.get(this.eventQuery(startDate, page, perPage, categoryId, tagId));
  }
  public getCategories(){
    return this.httpClient.get(this.TAXONOMY_CATEGORY_QUERY)
  }
  public getTags(){
    return this.httpClient.get(this.TAXONOMY_TAG_QUERY)
  }
}
