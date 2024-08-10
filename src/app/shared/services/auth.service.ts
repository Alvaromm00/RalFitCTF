import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseInfo } from '../model/AuthResponseInfo';
import { Observable } from 'rxjs/internal/Observable';
import { AuthRequest } from '../model/AuthRequest';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper = new JwtHelperService();
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.getToken() != null);

  private authServiceUrl = 'http://ralfit.ctf:8080';

  constructor(private http: HttpClient) {}

  public login(authRequest:AuthRequest): Observable<AuthResponseInfo> {
    console.log(this.authServiceUrl);
    return this.http.post<AuthResponseInfo>(this.authServiceUrl +'/login',authRequest);
  }

  public register (authRequest:AuthRequest): Observable<AuthResponseInfo> {
    return this.http.post<AuthResponseInfo>(this.authServiceUrl +'/register',authRequest);
  }

  public getLogs(logPath:string): Observable<string[]> {

    const token = this.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<string[]>(this.authServiceUrl + '/logs',logPath, { headers });
  }

  public getVersion(): Observable<string> {

    const token = this.getToken();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Ejemplo' : 'Mierda'
    });

    return this.http.get<string>(this.authServiceUrl + '/version', { headers });
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
