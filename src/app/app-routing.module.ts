import { EditProfileComponent } from './admin/edit-profile/edit-profile.component';
import { NewPostComponent } from './admin/new-post/new-post.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './product/home/home.component';
import { WelcomeComponent } from './product/welcome/welcome.component';
import { ServicesComponent } from './product/services/services.component';
import { ImpressionsComponent } from './product/impressions/impressions.component';

const routes: Routes = [
  { path: '412m1n', component: AdminComponent, children: [
    { path: 'new-post', component: NewPostComponent },
    { path: 'admin-pr', component: EditProfileComponent }
  ] },
  { path: 'app', component: ProductComponent, children:  [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'updates', component: HomeComponent },
    { path: 'impressions', component: ImpressionsComponent}
  ] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
