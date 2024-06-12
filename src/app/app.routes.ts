import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormEventComponent } from './components/form-event/form-event.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'formEvent', component: FormEventComponent },
];
