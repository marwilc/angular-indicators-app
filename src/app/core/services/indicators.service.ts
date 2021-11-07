import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DailyIndicators, PricesIndicator } from '../interfaces/indicators';

@Injectable({
  providedIn: 'root',
})
export class IndicatorsService {
  constructor(private _http: HttpClient) {}

  getAllIndicators() {
    return this._http.get<DailyIndicators>(environment.apiUrl);
  }

  getDetailIndicator(type: string) {
    return this._http.get<PricesIndicator>(`${environment.apiUrl}/${type}`);
  }
}
