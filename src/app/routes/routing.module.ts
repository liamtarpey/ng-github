import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePaths } from './routing.constants';

// Define all routes
const routes: Routes = RoutePaths;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {}
