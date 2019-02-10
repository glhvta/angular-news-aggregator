import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLogged: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin(): void {
    console.log('Log in action');
  }

  handleLogout(): void {
    console.log('Log out action');
  }
}
