import {Component} from "angular2/core";
/**
 * Created by minglili on 1/16/17.
 */
@Component({
    selector: 'my-sidebar',
    template: `
        <h3>Saved Profiles</h3>
        <button (click) = "onSaveNew()">Save List to Profile</button>
        <article class="profile">
            <h4>Profile Name</h4>
            <p> Cities: New York, Changchun</p>
            <span class="delete" (click)="onDeleteProfile($event)">X</span>
        </article>
    `,
    styleUrls: ['src/css/sidebar.css']
})

export class SidebarComponent {

}
