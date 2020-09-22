import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-repo-listing',
    templateUrl: './repo-listing.component.html',
    styleUrls: ['./repo-listing.component.scss']
})

export class RepoListingComponent implements OnInit {
    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        console.log('route: ', this.route);
        const foo = this.route.snapshot.paramMap.get('search');
        console.log('this: ', foo);
    }
}
