import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { UsersHttpService } from '../../../core/services/users-http.service';
import { User } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  public user$: Observable<User>;

  constructor(
    private usersHttpService: UsersHttpService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params.id;
    this.user$ = this.usersHttpService.getUser(userId);
  }
}
