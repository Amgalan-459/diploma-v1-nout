import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from '../interfaces/module';
import { environment } from '../../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }

  async getAllModules(): Promise<Module[]> {
    return await firstValueFrom(this.http.get<Module[]>(environment.apiUrl + '/api/module/all'));
  }

  async getAllAvailableModules(): Promise<Module[]> {
    return await firstValueFrom(this.http.get<Module[]>(environment.apiUrl + '/api/available/module/all'));
  }

  async getModuleById(id: number): Promise<Module> {
    return await firstValueFrom(this.http.get<Module>(environment.apiUrl + '/api/module/' + id));
  }

  async getAvailableModuleById(id: number): Promise<Module> {
    return await firstValueFrom(this.http.get<Module>(environment.apiUrl + '/api/available/module/' + id));
  }

  async getModulesByCourseId(courseId: number): Promise<Module[]> {
    return await firstValueFrom(this.http.get<Module[]>(environment.apiUrl + '/api/module/course/' + courseId));
  }

  async getAvailableModulesByCourseId(courseId: number): Promise<Module[]> {
    return await firstValueFrom(this.http.get<Module[]>(environment.apiUrl + '/api/available/module/course/' + courseId));
  }

  async postModule(module: Module): Promise<Module> {
    return await firstValueFrom(this.http.post<Module>(environment.apiUrl + '/api/module', module));
  }

  async deleteModule(id: number): Promise<Module> {
    return await firstValueFrom(this.http.delete<Module>(environment.apiUrl + '/api/module/' + id));
  }
}
