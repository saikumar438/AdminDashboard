import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  public events:any;
  public users: any;
  public userId: any;
  constructor (private dashboardService : DashboardService) {}
  
  ngOnInit(): void {
    this.getAllEventsData();
  }
  getAllEventsData() {
    this.dashboardService.getAllEvents().subscribe(
      (response) => {
        console.log("This is the value of the response from getAllEventsData ", response);
        this.events = response;
      }, 
      (error) => {
        console.log("Issue in the getAllEvents Data method ",error);
      }
    );
  }

  getAllUsers() {
    this.dashboardService.getAllUsers().subscribe(
      (response) => {
        console.log("This is the value of the user id ", this.userId);
        console.log("Inside the get all users ", response);
        this.users = response;
      },
      (error) => {
        console.log("Issue in retrieving the details of all the users inside getAllUsers ", error);
      }
    )
  }

  getUserOrderHistory() {
    this.dashboardService.getUserOrderHistory(this.userId).subscribe(
      (response) => {
        console.log("Inside the getUserOrderHistory ", response);
      },
      (error) => {
        console.log("Issue while retrieving the user order history ", error);
      }
    )
  }
}
