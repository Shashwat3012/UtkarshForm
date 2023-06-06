import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from './services/mail.service';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  form: FormGroup;

  // constructor(private mailService: MailService, private router: Router) { }

  ngOnInit(): void {
  }

  constructor(private mailService: MailService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.form.invalid) {
      return;
    }
    // Access the form values
    const user = {
      firstName: this.form.get('firstName')!.value,
      lastName: this.form.get('lastName')!.value,
      address: this.form.get('address')!.value,
      phoneNo: this.form.get('phoneNo')!.value,
      email: this.form.get('email')!.value,
    }
    

    // Do something with the form values (e.g., send data to a server)

    // Reset the form after submission
    this.mailService.sendEmail(user).subscribe((response) => {
      console.log(response);
    })
    this.form.reset();
  }
}
