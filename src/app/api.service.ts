import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private SETTINGS_URL="https://timelyapp.time.ly/api/calendars/info"
  private SETTINGS_BODY = {"url": "https://calendar.time.ly/ficceyp4"}

  private serverUrl = (id:number) => {
    return `https://timelyapp.time.ly/api/calendars/${id}/events`
  }

  private eventQuery = (settingsId?:number, startDate?:string, page?:number, perPage?:number, categoryId?:number, tagId?:number) => {

    const catString = categoryId ? `&categories=${categoryId}` : ""
    const tagString = tagId ? `&tags=${tagId}` : ""

    return `${this.serverUrl(settingsId)}?start_date=${startDate}&page=${page}&per_page=${perPage}${catString}${tagString}`
  }

  private TAXONOMY_CATEGORY_QUERY = "https://timelyapp.time.ly/api/calendars/4243455/taxonomies?type=taxonomy_category&page=1&per_page=100"
  private TAXONOMY_TAG_QUERY = "https://timelyapp.time.ly/api/calendars/4243455/taxonomies?type=taxonomy_tag&page=1&per_page=100"
  constructor(private httpClient: HttpClient) {}

  public getSettings() {
    return this.httpClient.post(this.SETTINGS_URL, this.SETTINGS_BODY,{});
  }

  public getEvents(settingsId?:number, startDate?:string, page?:number, perPage?:number, categoryId?:number, tagId?:number) {
    return this.httpClient.get(this.eventQuery(settingsId, startDate, page, perPage, categoryId, tagId));
  }
  public getCategories(){
    return this.httpClient.get(this.TAXONOMY_CATEGORY_QUERY)
  }
  public getTags(){
    return this.httpClient.get(this.TAXONOMY_TAG_QUERY)
  }
}
