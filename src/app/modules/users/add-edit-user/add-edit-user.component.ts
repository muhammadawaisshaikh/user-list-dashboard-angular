import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.programForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      personalId: ['', [Validators.required]],
      profilePhoto: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
    })
  }

  onSave(programForm: any) {
    let data = programForm.value;
    console.log(data);
  }

  onUpdate(programForm: any) {
    let data = programForm.value;
    console.log(data);
  }

}
