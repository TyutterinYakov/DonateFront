import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertDonateComponent } from './pages/alert-donate/alert-donate.component';
import { DonateComponent } from './pages/donate-page/donate/donate.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AddWidgetComponent } from './pages/user/add-widget/add-widget.component';
import { DashboardComponent } from './pages/user/dashboard/dashboard.component';
import { MessageComponent } from './pages/user/message/message.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { UpdateProfileComponent } from './pages/user/update-profile/update-profile.component';
import { UpdateWidgetComponent } from './pages/user/update-widget/update-widget.component';
import { WidgetComponent } from './pages/user/widget/widget.component';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent, pathMatch:'full'},
  {path:'register', component: RegisterComponent, pathMatch:'full'},
  {path:'pay/:userName', component: DonateComponent, pathMatch:'full'},
  {path:'alert/:userName', component: AlertDonateComponent, pathMatch:'full'},
  {path:'', component:HomeComponent},
  {
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate:[UserGuard],
    children:[
      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'message',
        component: MessageComponent
      },
      {
        path:'widgets',
        component: WidgetComponent
      },
      {
        path: 'widgets/add',
        component: AddWidgetComponent
      },
      {
        path: 'widgets/:widgetId',
        component: UpdateWidgetComponent
      },
      {
        path:'update',
        component: UpdateProfileComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
