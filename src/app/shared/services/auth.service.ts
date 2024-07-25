import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal, WritableSignal } from '@angular/core';
import { AuthResponseInfo } from '../model/AuthResponseInfo';
import { Observable } from 'rxjs/internal/Observable';
import { AuthRequest } from '../model/AuthRequest';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DOCUMENT } from '@angular/common';
import { of } from 'rxjs/internal/observable/of';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper = new JwtHelperService();
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.getToken() != null);

  constructor(private http: HttpClient) {}

  public login(authRequest:AuthRequest): Observable<AuthResponseInfo> {
    return this.http.post<AuthResponseInfo>('http://localhost:1212/login',authRequest);
  }

  public register (authRequest:AuthRequest): Observable<AuthResponseInfo> {
    return this.http.post<AuthResponseInfo>('http://localhost:1212/register',authRequest);
  }

  public getToken(): string | null {
    if (this.isLocalStorageAvailable) {
      return localStorage.getItem('auth_token');
    }
    return null
  }

  public getUserFromToken(): string | null {

    const token = this.getToken();

    if(token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.sub;
    }

    return null;
  }

  public getRoleFromToken(): string | null {

    const token = this.getToken();

    if(token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return decodedToken.role;
    }

    return null;
  }

  public isLogged() : Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  public cleanStorage(): void {
    window.localStorage.clear();
  }

}
