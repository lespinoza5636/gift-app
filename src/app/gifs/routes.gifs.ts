
import { Routes } from "@angular/router";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { SearchPageComponent } from "./pages/search-page/search-page.component";
import { TrendingPageComponent } from "./pages/trending-page/trending-page.component";


export default [
    {
        path: '',
        component: DashboardPageComponent,
        children: [
            {
                path: 'search',
                component: SearchPageComponent
            },
            {
                path: 'trending',
                component: TrendingPageComponent
            },
        ]
    }
] as Routes;