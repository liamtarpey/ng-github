import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
    selector: 'home-component',
    templateUrl: './home.template.html'
    // styleUrls: ['./list.component.scss']
})

export class HomeComponent {
    title = 'home';

    constructor(
        private router: Router
    ) {
        this.onSearchCallback = this.onSearchCallback.bind(this);
    }

    onSearchCallback(value: string) {
        // const listPath = RoutePaths.find(({name}) => name === 'list');
        this.router.navigate([`/list`, value]);
    }
}
