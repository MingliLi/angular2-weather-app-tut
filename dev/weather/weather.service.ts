/**
 * Created by minglili on 1/16/17.
 */
import {Injectable} from "angular2/core";
import {WEATHER_ITEMS} from "./weather.data";
import {Observable} from "rxjs/Rx";
import {Http} from "angular2/http"
import {WeatherItem} from "./weather-item";
@Injectable()
export  class WeatherService{

    constructor(private _http: Http){}
    getWeatherItems(){
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any> {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +
            '&APPID=5c42e03427fdc92538d279700ab92596&units=metric')
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }
}