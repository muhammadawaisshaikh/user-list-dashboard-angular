import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/http/services/users/users.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  programForm: any = FormGroup;
  user: any = {};
  isEditMode: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    this.user = this.router.getCurrentNavigation()?.extras?.state?.user;
  }

  ngOnInit(): void {
    this.formInit();

    // edit mode
    if (this.user?.id) {
      this.programForm.patchValue(this.user);
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  formInit() {
    this.programForm = this.fb.group({
      id: [this.randomId()],
      firstName: ['', [Validators.required, Validators.maxLength(60)]],
      lastName: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      personalId: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      profilePhoto: ['https://i.ibb.co/2MH630J/user.png', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      gender: ['male', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
    })
  }

  randomId = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  onSave(programForm: any) {
    let data = programForm.value;
    
    this.usersService.addUser(data).subscribe((res: any) => {
      alert(res.firstName + " - New User Created");
      this.router.navigateByUrl('/users/user-listing');
    },(error) => {
      alert('User Creation Failed!');
      this.router.navigateByUrl('/users/user-listing');
    })
  }

  onUpdate(programForm: any) {
    let data = programForm.value;
    
    this.usersService.updateUser(data, this.user?.id).subscribe((res: any) => {
      alert(res.firstName + " - User Updated");
      this.router.navigateByUrl('/users/user-listing');
    },(error) => {
      alert('User Updation Failed!');
      this.router.navigateByUrl('/users/user-listing');
    })
  }

  deleteUser() {
    this.usersService.deleteUser(this.user?.id).subscribe((res: any) => {
      alert("User Deleted");
      this.router.navigateByUrl('/users/user-listing');
    },(error) => {
      alert('User Deletion Failed!');
      this.router.navigateByUrl('/users/user-listing');
    })
  }

}
