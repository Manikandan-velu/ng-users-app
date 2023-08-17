import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: string[] | undefined;

  constructor(private httpService: HttpClient) { }

  getUsers(){
    return this.httpService.get<Users[]>('../../assets/users.json');
  }
}
