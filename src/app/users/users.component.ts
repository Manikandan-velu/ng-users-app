import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Users } from '../interfaces';
import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: Users[] = [];
  constructor(private usersService: UsersService, private router: Router,private sharing: SharingService){}

  ngOnInit(){
    this.usersService.getUsers()
    .subscribe(res => {
      this.users = res;
    } );
  }
  moreDetails(user:Users){
    this.sharing.setData(user);
    this.router.navigate(['/company-details'], {state: {users:JSON.stringify(user)}});
  }
}
