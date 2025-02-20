import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((data) => {
      this.user = data;
    });
  }
}
