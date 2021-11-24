import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styleUrls: ['./otpverify.component.css']
})
export class OtpverifyComponent implements OnInit {
  @ViewChild('secondDialog') secondDialog: TemplateRef<any>;
  @ViewChild('otpfail') otpfail: TemplateRef<any>;
  @ViewChild('otpalreadyexists') otpalreadyexists: TemplateRef<any>;

  form: FormGroup;
  submitted = false;
  constructor(private readonly fb: FormBuilder, private userService: UserService, private router: Router,
    private dialog: MatDialog,) {
    this.form = this.fb.group({
      OTP: ['', Validators.required],
      RequestID: [localStorage.getItem("RequestID")],
      PhoneNumber: [localStorage.getItem("PhoneNumber")]
    });
  }
  get otpvalidation() { return this.form.controls; }
  ngOnInit(): void {
  }
  submitForm() {
    this.submitted = true;
   // alert(localStorage.getItem("RequestID"))
    if (localStorage.getItem("RequestID") != null ) {
      this.userService.otpVerify(this.form.getRawValue()).subscribe(data => {
        console.log(data);
        if (data == "OTP verified Successfully") {
          if (data["res"] == "Phone Number Already Verified") {
            this.dialog.open(this.otpalreadyexists);
          }
          else {
            this.dialog.open(this.secondDialog);
          }
          this.form.reset();
          localStorage.clear();
          //localStorage.setItem("OTP",JSON.stringify(data));
          this.router.navigate(['']);

        }
        }, error => {                              //Error callback
        console.error('error caught in OTP verification component', error)
        this.dialog.open(this.otpfail);
        this.router.navigate(['']);
        //throw error;   //You can also throw the error to a global error handler
      });
    } else {

      this.dialog.open(this.otpfail);

    }
  }

}
