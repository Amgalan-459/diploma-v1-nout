import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';
import { TraineeData } from '../interfaces/trainee-data';
import { TraineeService } from './trainee.service';

export interface JwtPayload {
  exp?: number;
  role?: string;
  [key: string]: any;
}

export interface AuthResponse {
  token: string;
  expiration: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'jwt_token';
  private platformId = inject(PLATFORM_ID);
  private user: TraineeData | null = null

  private loggedInSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  loggedIn$ = this.loggedInSubject.asObservable();

  private nameSubject = new BehaviorSubject<string>(this.getName());
  name$ = this.nameSubject.asObservable();

  constructor(private http: HttpClient, private traineeService: TraineeService) { }

  async login(email: string, password: string) {
    const response = await firstValueFrom(
      this.http.post<AuthResponse>(environment.apiUrl + '/api/user/login', { email, password })
    );

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, response.token);
      await this.traineeService.getTraineeByEmail(email).then(res => this.user = res)
    }

    this.loggedInSubject.next(true);
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
    }
    this.loggedInSubject.next(false);
  }

  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return localStorage.getItem(this.tokenKey);
  }

  private hasValidToken(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const now = Date.now().valueOf() / 1000;
      return decoded.exp ? decoded.exp > now : true;
    } catch {
      return false;
    }
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded.role || null;
    } catch {
      return null;
    }
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'Admin';
  }

  isLoggedIn(): boolean {
    return this.hasValidToken();
  }

  async forgotPassword(email: string): Promise<number> {
    let trainee: TraineeData | null;
    await this.traineeService.getTraineeByEmail(email).then(res => trainee = res)
    if (trainee! === null){
      throw new Error('Not stated email')
    }
    return await firstValueFrom(this.http.post<number>(environment.apiUrl + '/api/forgetpassword/' + email, null));
  }

  getUser() {
    return this.user
  }

  getName(){
    return this.user?.name!;
  }

  async AddOrUpdateTrainee(emailUser: string, passwordUser: string, nameUser: string): Promise<TraineeData> {
    let trainee: TraineeData;
    try {
      trainee = await this.traineeService.getTraineeByEmail(emailUser)
      trainee.password = passwordUser
    }
    catch(ex){
      trainee = {
          id: 0,
          name: nameUser,
          surname: '',
          email: emailUser,
          phoneNumber: null,
          sex: 0,
          password: passwordUser,
          countOfTrainsInWeek: 0,
          isActive: true,
          trainerId: 1,
          trainer: null,
          workouts: []
      }
    }
    return await firstValueFrom(this.http.post<TraineeData>(environment.apiUrl + '/api/trainee', trainee))
  }
}
