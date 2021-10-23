import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface Account {
  firstName: string;
  lastName: string;
  email: string;
  personalId: number;
  profilePhoto: string;
  mobileNumber: string;
  gender: string;
  street: string;
  city: string;
  country: string;
  zipCode: string;
}

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  accountData: any = [
    {
      firstName: "Muhammad",
      lastName: "Awais",
      email: "awaisshaikh94@gmail.com",
      personalId: 1,
      profilePhoto: "Avatar",
      mobileNumber: "+923312737076",
      gender: "Male",
      street: "Shalimar Banglows",
      city: "Karachi",
      country: "Pakistan",
      zipCode: "75290",
    }
  ]

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'personalId', 'profilePhoto', 'mobileNumber', 'gender', 'street', 'city', 'country', 'zipCode'];
  dataSource = new MatTableDataSource<Account>(this.accountData);

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < 100; i++) {
      this.accountData.push(this.accountData[0]);
    }
  }

  // enabling sorting and pagination after view rendered in DOM
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
