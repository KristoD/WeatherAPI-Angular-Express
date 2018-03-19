import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css', './../app.component.css']
})
export class DallasComponent implements OnInit {
  weather : any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.weather = {temp: '', temp_max: '', temp_min: '', humidity: '', status: ''}
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    let o = this._httpService.getWeather('dallas');
    o.subscribe(data => {
      this.weather = {temp: this._httpService.weatherConverter(data['main'].temp), temp_max: this._httpService.weatherConverter(data['main'].temp_max),
      temp_min: this._httpService.weatherConverter(data['main'].temp_min), humidity: data['main'].humidity, status: data['weather'][0].description};
    });
  }
}
