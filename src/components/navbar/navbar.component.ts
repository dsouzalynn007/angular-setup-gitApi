import { Component } from '@angular/core'
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../pages/contacts/contacts.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'navbar-angular',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    standalone: true,
    imports: [
        HomeComponent,
        ContactComponent,
        NotificationsComponent,
        RouterModule,
    ]
})

export class NavbarComponent {
}