import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './app-search.component.html',
    styleUrls: ['./app-search.component.scss']
})

export class AppSearchComponent implements OnInit {

    /** Props */
    @Input() callback: Function;

    /** Default values */
    searchValue: string = '';

    constructor() {}
    ngOnInit(): void {}

    onSubmit() {
        this.callback(this.searchValue);
    }
}
