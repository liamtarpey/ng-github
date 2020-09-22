// Routes
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { RepoComponent } from './repo/repo.component';

export const RoutePaths: object[] = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'repo', component: RepoComponent },
];
