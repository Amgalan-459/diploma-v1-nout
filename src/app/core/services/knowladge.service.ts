import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Knowladgebase } from '../interfaces/knowladgebase';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class KnowladgeService {

  constructor(private http: HttpClient) { }

  async getAllKnowladgebases(): Promise<Knowladgebase[]> {
    return await firstValueFrom(this.http.get<Knowladgebase[]>(environment.apiUrl + '/api/knowladgebase/all'));
  }

  async getKnowladgebaseById(id: number): Promise<Knowladgebase> {
    return await firstValueFrom(this.http.get<Knowladgebase>(environment.apiUrl + '/api/knowladgebase/' + id));
  }

  async postKnowladgebase(knowladgebase: Knowladgebase): Promise<Knowladgebase> {
    return await firstValueFrom(this.http.post<Knowladgebase>(environment.apiUrl + '/api/knowladgebase', knowladgebase));
  }

  async deleteKnowladgebase(id: number): Promise<Knowladgebase> {
    return await firstValueFrom(this.http.delete<Knowladgebase>(environment.apiUrl + '/api/knowladgebase/' + id));
  }
}
