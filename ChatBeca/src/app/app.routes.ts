import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { SubscribePage } from './features/subscribe-page/subscribe-page';
import { ContactPage } from './features/contact-page/contact-page';
import { ChatPage } from './features/chat-page/chat-page';

export const routes: Routes = [
    {path: '', component: LoginPage},
    {path: 'subscribe', component: SubscribePage},
    {path: 'contacts', component: ContactPage},
    {path: 'chat', component: ChatPage}
];
