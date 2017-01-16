import {Component, OnInit} from "angular2/core";
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "./weather-item";
import {WEATHER_ITEMS} from "./weather.data";
import {WeatherService} from "./weather.service";
@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
        <div *ngFor="#weatherItem of weatherItems">
         <weather-item [item]="weatherItem"></weather-item>
         <p class="delete" (click)="onDeleteWeatherItem($event, weatherItem)">X</p>
        </div>
        </section>
    `,
    directives: [WeatherItemComponent]
})
export class WeatherListComponent implements OnInit{
    weatherItems: WeatherItem[];

    constructor(private _weatherService: WeatherService){}

    ngOnInit():any{
        this.weatherItems = this._weatherService.getWeatherItems();
    }
    onDeleteWeatherItem (event: Event, weatherItem: WeatherItem){
        event.stopPropagation();
        this._weatherService.deleteWeatherItem(weatherItem);
    }
}