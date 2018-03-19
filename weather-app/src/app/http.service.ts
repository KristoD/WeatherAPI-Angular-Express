import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {}

  getWeather(city) {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=93775c6e61ef4ad982559d11759b90c8');
  }

  weatherConverter(temp) {
    var f = 1.8 * (temp - 273) + 32;
    return Math.floor(f);
  }

}
