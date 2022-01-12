import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

const routes: Routes = [{ path: '**', pathMatch: 'full', redirectTo: '' }];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }), AuthRoutingModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}
