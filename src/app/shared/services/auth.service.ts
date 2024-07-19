import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseInfo } from '../model/AuthResponseInfo';
import { Observable } from 'rxjs/internal/Observable';
import { AuthRequest } from '../model/AuthRequest';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(authRequest:AuthRequest): Observable<AuthResponseInfo> {
    return this.http.post<AuthResponseInfo>('http://localhost:1212/login',authRequest);
  }
}
