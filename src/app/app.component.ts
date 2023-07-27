import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public isMaxHidden = false;
    public isFrogHidden = true;

    public dance() {
        this.isMaxHidden = !this.isMaxHidden;
        this.isFrogHidden = !this.isFrogHidden;
    }
}
