import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../interfaces/test';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  async getAllTests(): Promise<Test[]> {
    return await firstValueFrom(this.http.get<Test[]>(environment.apiUrl + '/api/test/all'));
  }

  async getTestById(id: number): Promise<Test> {
    return await firstValueFrom(this.http.get<Test>(environment.apiUrl + '/api/test/' + id));
  }

  async postTest(test: Test): Promise<Test> {
    return await firstValueFrom(this.http.post<Test>(environment.apiUrl + '/api/test', test));
  }

  async deleteTest(id: number): Promise<Test> {
    return await firstValueFrom(this.http.delete<Test>(environment.apiUrl + '/api/test/' + id));
  }
}
