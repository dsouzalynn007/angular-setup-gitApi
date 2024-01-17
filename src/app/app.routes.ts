import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ContactComponent } from '../components/pages/contacts/contacts.component';
import { NotificationsComponent } from '../components/pages/notifications/notifications.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'notifications', component: NotificationsComponent},
];