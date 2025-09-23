import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  async getAllCourses(): Promise<Course[]> {
    return await firstValueFrom(this.http.get<Course[]>(environment.apiUrl + '/api/course/all'));
  }

  async getAllAvailableCourses(): Promise<Course[]> {
    return await firstValueFrom(this.http.get<Course[]>(environment.apiUrl + '/api/available/course/all'));
  }

  async getCourseById(id: number): Promise<Course> {
    return await firstValueFrom(this.http.get<Course>(environment.apiUrl + '/api/course/' + id));
  }

  async getAvailableCourseById(id: number): Promise<Course> {
    return await firstValueFrom(this.http.get<Course>(environment.apiUrl + '/api/available/course/' + id));
  }

  async getCoursesByUserId(userId: number): Promise<Course[]> {
    return await firstValueFrom(this.http.get<Course[]>(environment.apiUrl + '/api/course/user/' + userId));
  }

  async postCourse(course: Course): Promise<Course> {
    return await firstValueFrom(this.http.post<Course>(environment.apiUrl + '/api/course', course));
  }

  async purshuaseCourse(userId: number, course: Course): Promise<Course> {
    return await firstValueFrom(this.http.post<Course>(environment.apiUrl + '/api/purshuasecourse/' + userId, course));
  }

  async deleteCourse(id: number): Promise<Course> {
    return await firstValueFrom(this.http.delete<Course>(environment.apiUrl + '/api/course/' + id));
  }
}
