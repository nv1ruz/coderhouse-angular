import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

import { AuthGuard } from './guards/auth.guard';
import { MainTemplateComponent } from './template/pages/main-template/main-template.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
    {
        path: '',
        component: MainTemplateComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'movies',
                loadChildren: () =>
                    import('./modules/movies/movies.module').then((m) => m.MoviesModule),
            },
            {
                path: 'cart',
                component: CartComponent,
            },
            {
                path: 'profile',
                component: UserProfileComponent,
            },
            {
                path: 'admin',
                loadChildren: () =>
                    import('./modules/admin/admin.module').then((m) => m.AdminModule),
            },
            { path: '', pathMatch: 'full', redirectTo: 'movies' },
        ],
    },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }), AuthRoutingModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}
