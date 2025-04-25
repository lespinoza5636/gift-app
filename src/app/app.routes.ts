import { Routes } from '@angular/router';
import { TrendingPageComponent } from './gifs/pages/trending-page/trending-page.component';
import { SearchPageComponent } from './gifs/pages/search-page/search-page.component';
export const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./gifs/routes.gifs')
    },
    {
        path: '**',
        redirectTo: 'trending'
    }
];
