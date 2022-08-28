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
      access_key: '8a1b0427945eb413cf085cb4d8767427',
      query: cityName,
      units: 'm',
    });

    const completeURL = `http://api.weatherstack.com/current?${params}`;
    // console.log(completeURL)
    return this.http.get<WeatherData>(completeURL);
  };
}
