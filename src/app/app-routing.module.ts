import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

import { AuthGuard } from './guards/auth.guard';
import { MainTemplateComponent } from './template/pages/main-template/main-template.component';

const routes: Routes = [
    {
        path: '',
        component: MainTemplateComponent,
        canActivate: [AuthGuard],
    },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }), AuthRoutingModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}
