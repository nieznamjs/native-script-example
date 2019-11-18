import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersHttpService } from '../../core/services/users-http.service';
import { User } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-photos-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(
    private usersHttpService: UsersHttpService,
  ) { }

  ngOnInit() {
    this.users$ = this.usersHttpService.getUsers();
  }
}
