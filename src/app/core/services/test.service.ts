import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../interfaces/test';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  async getAllTests(): Promise<Test[]> {
    return await firstValueFrom(this.http.get<Test[]>(environment.apiUrl + '/api/test/all'));
  }

  async getAllAvailableTests(): Promise<Test[]> {
    return await firstValueFrom(this.http.get<Test[]>(environment.apiUrl + '/api/available/test/all'));
  }

  async getTestById(id: number): Promise<Test> {
    return await firstValueFrom(this.http.get<Test>(environment.apiUrl + '/api/test/' + id));
  }

  async getAvailableTestById(id: number): Promise<Test> {
    return await firstValueFrom(this.http.get<Test>(environment.apiUrl + '/api/available/test/' + id));
  }

  async getTestsByModuleId(moduleId: number): Promise<Test> {
    return await firstValueFrom(this.http.get<Test>(environment.apiUrl + '/api/test/module/' + moduleId))
  }

  async getAvailableTestsByModuleId(moduleId: number): Promise<Test> {
    return await firstValueFrom(this.http.get<Test>(environment.apiUrl + '/api/available/test/module/' + moduleId))
  }

  async postTest(test: Test): Promise<Test> {
    return await firstValueFrom(this.http.post<Test>(environment.apiUrl + '/api/test', test));
  }

  async deleteTest(id: number): Promise<Test> {
    return await firstValueFrom(this.http.delete<Test>(environment.apiUrl + '/api/test/' + id));
  }
}
