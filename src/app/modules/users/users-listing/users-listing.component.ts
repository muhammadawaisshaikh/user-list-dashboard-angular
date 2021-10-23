import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UsersService } from 'src/app/core/http/services/users/users.service';

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

  @ViewChild(MatPaginator) paginator: MatPaginator | any = 5;
  @ViewChild(MatSort) sort: MatSort | any;

  accountData: any = []

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'personalId', 'profilePhoto', 'mobileNumber', 'gender', 'street', 'city', 'country', 'zipCode'];
  dataSource = new MatTableDataSource<Account>(this.accountData);

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUserListing();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUserListing() {
    this.usersService.getUsers().subscribe((res: any) => {
      this.accountData = res;

      // adding response to dataSource to render table
      this.dataSource = new MatTableDataSource<Account>(this.accountData);

      // enabling sorting and pagination after successful responce
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onViewUser(item: any) {
    console.log(item);
    
    this.router.navigate(['/users/add-edit'], {state: {user: item}})
  }

}
