import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData, SignupData } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = `/api/v2`;
  constructor(private http: HttpClient) { }

  /**
   * Attempt to log the user in.
   */
  login(data: LoginData) {
    return this.http.post(`${this.url}/user/login`, data);
  }

  /**
   * Signup a new user.
   */
  signup(data: SignupData) {
    return this.http.post(`${this.url}/user/signup`, data);
  }
}
