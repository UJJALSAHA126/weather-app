import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  cityName: string = 'Kolkata';
  weatherData?: WeatherData = {
    request: {
      type: 'City',
      query: 'Kolkata, India',
      language: 'en',
      unit: 'm',
    },
    location: {
      name: 'Kolkata',
      country: 'India',
      region: 'West Bengal',
      lat: '22.570',
      lon: '88.370',
      timezone_id: 'Asia/Kolkata',
      localtime: '2022-08-28 10:51',
      localtime_epoch: 1661683860,
      utc_offset: '5.50',
    },
    current: {
      observation_time: '05:21 AM',
      temperature: 30,
      weather_code: 389,
      weather_icons: [
        'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0024_thunderstorms.png',
      ],
      weather_descriptions: [
        'Light Rain With Thunderstorm, Rain With Thunderstorm',
      ],
      wind_speed: 22,
      wind_degree: 170,
      wind_dir: 'S',
      pressure: 1005,
      precip: 0,
      humidity: 75,
      cloudcover: 100,
      feelslike: 39,
      uv_index: 6,
      visibility: 3,
      is_day: 'yes',
    },
  };

  ngOnInit(): void {
    // this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit = () => {
    // this.getWeatherData(this.cityName);
    this.cityName = '';
  };

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response;
      },
    });
  }

  title = 'WeatherApp';
}
