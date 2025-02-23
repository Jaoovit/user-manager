import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  userId: number = 0;
  userForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.userId !== 0) {
      this.userService.getUser(this.userId).subscribe((user) => {
        this.userForm.patchValue(user);
      });
    }
  }

  submitForm(): void {
    if (this.userId !== 0) {
      this.userService.updateUser(this.userId, this.userForm.value);
    } else {
      this.userService.addUser(this.userForm.value);
    }
  }
}
