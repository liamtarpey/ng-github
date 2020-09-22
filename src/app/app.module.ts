import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routes/routing.module';

// import { AppSearchComponent } from './components/app-search/app-search.component';
// import { RepoListingComponent } from './components/repo-listing/repo-listing.component';

// Components
import { AppNav } from './components/app-nav/app-nav.component';
import { AppComponent } from './app.component';
import { AppFooter } from './components/app-footer/app-footer.component';

@NgModule({
    declarations: [
        AppNav,
        AppComponent,
        AppFooter,
        // AppSearchComponent,
        // RepoListingComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
