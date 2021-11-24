import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private readonly router: Router,private authService: SocialAuthService) { }

  ngOnInit(): void {
    //console.log(this.authService)
  }

  onClick() {
    this.authService.signOut;
    localStorage.clear();
    this.router.navigate(['url']);

}

}
