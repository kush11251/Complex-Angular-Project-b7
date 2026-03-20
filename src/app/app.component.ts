// App component
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  template: '<button (click)="loadData()">Load Data</button>'
})
export class AppComponent {
  constructor(private userService: UserService) { }

  loadData() {
    this.userServiceUserData().subscribe(data => console.log(data));
  }
}