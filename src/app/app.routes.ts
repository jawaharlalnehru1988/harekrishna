import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', loadComponent() {
        return import('../app/home/home.component')
            .then(m => m.HomeComponent)
    },},
    {path: 'articles', loadComponent: () => import('../app/articles/articles.component')
        .then(m => m.ArticlesComponent)
    }
];
