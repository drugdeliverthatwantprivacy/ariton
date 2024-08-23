import { Component, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LayoutService } from '../layout.service';
import { MatCardModule } from '@angular/material/card';
import { NotificationEvent, NotificationService } from '../notification.service';
import { MatIconModule } from '@angular/material/icon';
import { AgoPipe } from '../shared/pipes/ago.pipe';
import { AppService } from '../app.service';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ProfileCardComponent } from '../shared/components/profile-card/profile-card.component';
import { ProfileHeaderComponent } from '../shared/components/profile-header/profile-header.component';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    ProfileHeaderComponent,
    ProfileCardComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    AgoPipe,
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent {
  registration: ServiceWorkerRegistration | undefined;

  layout = inject(LayoutService);

  notification = inject(NotificationService);

  connection = inject(ConnectionService);

  app = inject(AppService);

  notifications = signal<NotificationEvent[]>([]);

  constructor() {
    this.layout.resetActions();

    effect(async () => {
      if (this.app.initialized()) {
        await this.loadNotifications();
      }
    });
  }

  async deleteNotifications() {
    for (const notification of this.notifications()) {
      await notification.record.delete();
    }

    this.notifications.set([]);
  }

  async generateNotification() {
    // First simulate an incoming connection request.
    await this.connection.create();

    const event = await this.notification.create({ title: 'Friend Request', app: 'Friends', icon: 'people' });
    this.notifications.update((list) => [...list, event]);

    const event2 = await this.notification.create({
      title: 'Connect Request',
      description:
        'This user wants to connect with you, you have to accept an initial connect request to be able to receive other sharing requests, such as shared Tasks, collabrative apps and more. Only accept this request if you know the user. This is to avoid spam messages.',
      app: 'Connect',
      icon: 'connect_without_contact',
      connectRecordId: '123',
    });
    this.notifications.update((list) => [...list, event2]);
  }

  async loadNotifications() {
    const notifications = await this.notification.load();
    this.notifications.set(notifications);
  }

  async enableNotifications() {
    console.log('Notifications enabled');
    this.sendNotification('Hello World');
  }

  async disableNotifications() {
    console.log('Notifications disabled');
  }

  async ngOnInit() {
    console.log('Notifications component loaded');
    this.registration = await navigator.serviceWorker.getRegistration();
  }

  async sendNotification(message: string) {
    console.log('Sending notification');

    if (Notification.permission === 'granted') {
      console.log('Notifications enabled!!!!');
      this.showNotification(message);
    } else {
      console.error('Notifications not enabled');

      if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();

        if (permission === 'granted') {
          this.showNotification('Hello World');
        }
      }
    }
  }

  async showNotification(message: string) {
    var title = 'Ariton says hi!';

    const payload = {
      body: message,
    };

    console.log('Showing notification');

    if (this.registration && 'showNotification' in this.registration) {
      console.log('Using service worker');
      this.registration.showNotification(title, payload);
    } else {
      console.log('Using new notification');
      new Notification(title, payload);
    }
  }
}
