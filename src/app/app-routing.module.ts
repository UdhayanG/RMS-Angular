import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MailverificationComponent } from './mailverification/mailverification.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { RegsuccessComponent } from './registration/regsuccess/regsuccess.component';
import { RoleComponent } from './role/role.component';


const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'account/verify-email', component: MailverificationComponent },
  { path: 'OtpVerify', component:OtpverifyComponent  },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'RegSuccess', component: RegsuccessComponent },
  { path: 'AddRole', component: RoleComponent },

  { path: 'Privacypolicy', component: PrivacypolicyComponent },
   {path: 'Profile',loadChildren: () => import('./user-profile/user-profile.module').
then(module => module.UserProfileModule)},
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
