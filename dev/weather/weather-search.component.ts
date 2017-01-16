import {Component} from "angular2/core";
import {ControlGroup} from "angular2/common";
/**
 * Created by minglili on 1/16/17.
 */

@Component({
    selector: 'my-weather-search',
    template: `
        <section class="weather-search">
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <label for="city">City</label>
                <input ngControl="location" type="text" id="city" required>
                <button type="submit">Add City</button>
            </form>
        </section>
    `
})

export class WeatherSearchComponent{

    onSubmit(form: ControlGroup){
        console.log(form);
    }
}
