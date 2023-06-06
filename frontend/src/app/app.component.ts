import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.form.invalid) {
      return;
    }

    // Access the form values
    const name = this.form.controls['name'].value;
    const email = this.form.controls['email'].value;
    const message = this.form.controls['message'].value;

    // Do something with the form values (e.g., send data to a server)

    // Reset the form after submission
    this.form.reset();
  }
}
