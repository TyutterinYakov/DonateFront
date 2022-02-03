import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './pages/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { authInterceptorProviders } from './services/auth.interceptor';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { SidebarComponent } from './pages/user/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { MessageComponent } from './pages/user/message/message.component';
import { WidgetComponent } from './pages/user/widget/widget.component';
import { DonateComponent } from './pages/donate-page/donate/donate.component';
import {MatTableModule} from '@angular/material/table';
import { AlertDonateComponent } from './pages/alert-donate/alert-donate.component';
import { AddWidgetComponent } from './pages/user/add-widget/add-widget.component';
import { UpdateWidgetComponent } from './pages/user/update-widget/update-widget.component';
import { UpdateProfileComponent } from './pages/user/update-profile/update-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    MessageComponent,
    WidgetComponent,
    DonateComponent,
    AlertDonateComponent,
    AddWidgetComponent,
    UpdateWidgetComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatTableModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
