import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePaths } from './routing.constants';

import { HomeModule } from './home/home.module';

// Move these - should be in a wrapping module
// import { FormsModule } from '@angular/forms';
// import { AppSearchComponent } from '../components/app-search/app-search.component';
// import { RepoListingComponent } from '../components/repo-listing/repo-listing.component';

// Define all routes
const routes: Routes = RoutePaths;

@NgModule({
    imports: [RouterModule.forRoot(routes), HomeModule],
    exports: [RouterModule]
})

export class RoutingModule {}
