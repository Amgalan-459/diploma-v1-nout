import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExerciseRawData } from '../interfaces/exercise-raw-data';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseRawService {

  constructor(private http: HttpClient) { }

  async getAllExerciseRaws(): Promise<ExerciseRawData[]> {
    return await firstValueFrom(this.http.get<ExerciseRawData[]>(environment.apiUrl + '/api/exerciseraw/all'));
  }

  async getExerciseRawById(id: number): Promise<ExerciseRawData> {
    return await firstValueFrom(this.http.get<ExerciseRawData>(environment.apiUrl + '/api/exerciseraw/' + id));
  }

  async postExerciseRaw(exerciseRaw: ExerciseRawData): Promise<ExerciseRawData> {
    return await firstValueFrom(this.http.post<ExerciseRawData>(environment.apiUrl + '/api/exerciseraw', exerciseRaw));
  }

  async deleteExerciseRaw(id: number): Promise<ExerciseRawData> {
    return await firstValueFrom(this.http.delete<ExerciseRawData>(environment.apiUrl + '/api/exerciseraw/' + id));
  }
}
