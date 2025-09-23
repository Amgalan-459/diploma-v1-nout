import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TraineeData } from '../interfaces/trainee-data';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
constructor(private http: HttpClient) {}

  async getAllTrainees() : Promise<TraineeData[]>{
    return await firstValueFrom( this.http.get<TraineeData[]>(environment.apiUrl + '/api/trainee/all') );
  }

  async getTraineeById(id: number) : Promise<TraineeData> {
    return await firstValueFrom( this.http.get<TraineeData>(environment.apiUrl + '/api/trainee/' + id) ); 
  }

  async getTraineeByEmail(email: string) : Promise<TraineeData> {
    return await firstValueFrom( this.http.get<TraineeData>(environment.apiUrl + '/api/trainee/' + email) ); 
  }

  async getTraineesByTrainerId(id: number) : Promise<TraineeData[]> {
    return await firstValueFrom( this.http.get<TraineeData[]>(environment.apiUrl + '/api/trainee/trainer/' + id) );
  }

  async postTrainee(trainee: TraineeData) : Promise<TraineeData> {
    return await firstValueFrom( this.http.post<TraineeData>(environment.apiUrl + '/api/trainee', trainee) ); 
  }

  async deleteTrainee(id: number) : Promise<TraineeData> {
    return await firstValueFrom( this.http.delete<TraineeData>(environment.apiUrl + '/api/trainee/' + id) ); 
  }
}
