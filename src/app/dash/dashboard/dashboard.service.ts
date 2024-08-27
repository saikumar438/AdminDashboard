import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private eventsUrl = "https://api.blinktickets.com/api/v1/events";
  private getAllUsersUrl = "http://localhost:8080/api/v1/admin/getAllUsersForAdmin"
  private getUserOrderHistoryUrl = "http://localhost:8080/api/v1/admin/getUserOrderHistoryForAdmin/"

  constructor(private httpClient: HttpClient) { }

  getAllEvents(): Observable<any> {
    return this.httpClient.get<any>(this.eventsUrl);
  }

  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>(this.getAllUsersUrl);
  }

  getUserOrderHistory(id:string): Observable<any> {
    return this.httpClient.get<any>(`this.getUserOrderHistoryurl/${id}`)
  }
}
