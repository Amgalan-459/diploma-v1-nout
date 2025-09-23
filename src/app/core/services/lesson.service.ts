import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../interfaces/lesson';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }

  async getAllLessons(): Promise<Lesson[]> {
    return await firstValueFrom(this.http.get<Lesson[]>(environment.apiUrl + '/api/lesson/all'));
  }

  async getAllAvailableLessons(): Promise<Lesson[]> {
    return await firstValueFrom(this.http.get<Lesson[]>(environment.apiUrl + '/api/available/lesson/all'));
  }

  async getLessonById(id: number): Promise<Lesson> {
    return await firstValueFrom(this.http.get<Lesson>(environment.apiUrl + '/api/lesson/' + id));
  }

  async getLessonsByModuleId(moduleId: number): Promise<Lesson> {
    return await firstValueFrom(this.http.get<Lesson>(environment.apiUrl + '/api/lesson/module/' + moduleId))
  }

  async getAvailableLessonsByModuleId(moduleId: number): Promise<Lesson> {
    return await firstValueFrom(this.http.get<Lesson>(environment.apiUrl + '/api/available/lesson/module/' + moduleId))
  }

  async postLesson(lesson: Lesson): Promise<Lesson> {
    return await firstValueFrom(this.http.post<Lesson>(environment.apiUrl + '/api/lesson', lesson));
  }

  async deleteLesson(id: number): Promise<Lesson> {
    return await firstValueFrom(this.http.delete<Lesson>(environment.apiUrl + '/api/lesson/' + id));
  }
}
