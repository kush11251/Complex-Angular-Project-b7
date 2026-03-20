// User service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://example.com/api';

  constructor(private http: HttpClient) { }

  userData(): any {
    return this.http.get(`${this.apiUrl}/users`);
  }
}