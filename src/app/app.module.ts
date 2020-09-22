import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routes/routing.module';

// Components
import { AppNav } from './components/app-nav/app-nav.component';
import { AppComponent } from './app.component';
import { AppFooter } from './components/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppNav,
    AppComponent,
    AppFooter
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
