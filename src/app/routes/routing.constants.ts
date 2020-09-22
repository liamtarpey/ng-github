// Routes
import { HomeModule } from './home/home.module';
import { ListComponent } from './list/list.component';
import { RepoComponent } from './repo/repo.component';

export const RoutePaths: object[] = [
    {
        name: 'home',
        path: '',
        // module: HomeModule
        // component: HomeComponent,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    { name: 'list', path: 'list/:search', component: ListComponent },
    { name: 'repo', path: 'repo/:id', component: RepoComponent },
];
