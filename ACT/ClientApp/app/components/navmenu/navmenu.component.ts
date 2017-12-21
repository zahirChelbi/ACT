import { Component } from '@angular/core';

@Component({
    selector: 'navmenu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css'],
    host: {
        '(window:scroll)': 'updateHeader($event)'
    }
})
export class NavmenuComponent {
    isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 200;

    constructor() { }

    updateHeader(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if (this.currPos >= this.changePos) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
    }
}