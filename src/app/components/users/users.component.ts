import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
