import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    @ViewChild('max') max: HTMLImageElement;
    public isMaxHidden = false;
    public isFrogHidden = true;

    public dance() {
        this.isMaxHidden = !this.isMaxHidden;
        this.isFrogHidden = !this.isFrogHidden;
    }
}
