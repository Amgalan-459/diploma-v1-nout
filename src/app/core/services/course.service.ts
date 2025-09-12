import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  async getAllCourses(): Promise<Course[]> {
    return await firstValueFrom(this.http.get<Course[]>(environment.apiUrl + '/api/course/all'));
  }

  async getCourseById(id: number): Promise<Course> {
    return await firstValueFrom(this.http.get<Course>(environment.apiUrl + '/api/course/' + id));
  }

  async postCourse(course: Course): Promise<Course> {
    return await firstValueFrom(this.http.post<Course>(environment.apiUrl + '/api/course', course));
  }

  async deleteCourse(id: number): Promise<Course> {
    return await firstValueFrom(this.http.delete<Course>(environment.apiUrl + '/api/course/' + id));
  }
}
