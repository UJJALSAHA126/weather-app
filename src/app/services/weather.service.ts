import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})

export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData = (cityName: string): Observable<WeatherData> => {
    const params = new URLSearchParams({
      access_key: environment.weatherApiKey,
      query: cityName,
      units: 'm',
    });

    const completeURL = `${environment.weatherApiBaseUrl}${params}`;
    // console.log(completeURL)
    return this.http.get<WeatherData>(completeURL);
  };
}
