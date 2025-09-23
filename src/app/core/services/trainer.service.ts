import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainerData } from '../interfaces/trainer-data';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  async getAllTrainers(): Promise<TrainerData[]> {
    return await firstValueFrom(this.http.get<TrainerData[]>(environment.apiUrl + '/api/trainer/all'));
  }

  async getTrainerById(id: number): Promise<TrainerData> {
    return await firstValueFrom(this.http.get<TrainerData>(environment.apiUrl + '/api/trainer/' + id));
  }

  async getTrainerByEmail(email: string): Promise<TrainerData> {
    return await firstValueFrom(this.http.get<TrainerData>(environment.apiUrl + '/api/trainer/' + email));
  }

  async postTrainer(trainer: TrainerData): Promise<TrainerData> {
    return await firstValueFrom(this.http.post<TrainerData>(environment.apiUrl + '/api/trainer', trainer));
  }

  async deleteTrainer(id: number): Promise<TrainerData> {
    return await firstValueFrom(this.http.delete<TrainerData>(environment.apiUrl + '/api/trainer/' + id));
  }
}
