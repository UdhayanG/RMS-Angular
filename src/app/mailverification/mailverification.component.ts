import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-mailverification',
  templateUrl: './mailverification.component.html',
  styleUrls: ['./mailverification.component.css']
})
export class MailverificationComponent implements OnInit {

  @ViewChild('mailsuccess') mailsuccess: TemplateRef<any>;
  @ViewChild('mailfail') mailfail: TemplateRef<any>;
  @ViewChild('mailalreadyexists') mailalreadyexists: TemplateRef<any>;

  token: string;
  constructor(private dialog: MatDialog, private route: ActivatedRoute, private userService: UserService, private router: Router,) {
    console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      console.log('Called sss', this.token);
    });
  }

  ngOnInit(): void {
    // console.log('oninit=======>', this.token);
  }

  verifyMail() {

    console.log('verifyMail=======>', this.token);

    this.userService.mailVerify(this.token).subscribe(data => {
      console.log(data);
      if (data["res"] == "Email Already Verified") {
        this.dialog.open(this.mailalreadyexists);
      }
      else {
        this.dialog.open(this.mailsuccess);
      }
     // this.dialog.open(this.mailfail);
     localStorage.clear();
      this.router.navigate(['']);
    }, error => {                              //Error callback
      console.error('error caught in mail verification component',error)
      this.dialog.open(this.mailfail);
      this.router.navigate(['']);
      //throw error;   //You can also throw the error to a global error handler
    });
  }


}
