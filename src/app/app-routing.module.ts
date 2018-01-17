import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModelBasedFormComponent} from './model-based-form/model-based-form.component';

const routes: Routes = [
    { path: 'form', component: ModelBasedFormComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
