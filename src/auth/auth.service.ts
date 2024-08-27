import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'https://api.blinktickets.com/api/user/login';
  private getAllUsersUrl = 'http://localhost:8080/api/v1/admin/getAllUsersForAdmin';
  private tokenKey = 'auth-token';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem(this.tokenKey);
    this.currentUserSubject = new BehaviorSubject<any>(storedUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(userName: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { userName, password })
      .pipe(map(response => {
        console.log(response);
        
        // Store user details and JWT token in local storage to keep user logged in
        if (response && response.access_token) {
          console.log("Saving the user details in the local storage ");
          localStorage.setItem(this.tokenKey, response.access_token);
          this.currentUserSubject.next(response.access_token);
        }
        console.log("This is the token from that auth service ",localStorage.getItem(this.tokenKey));
        
        return response;
      }));
  }

  private getToken : string = localStorage.getItem('auth-token')!;

  getAllUsers(): Observable<any> {
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.getToken}`
      });

      return this.http.get(this.getAllUsersUrl, {headers});
  }

}
