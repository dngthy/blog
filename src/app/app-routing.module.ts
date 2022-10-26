import { EditProfileComponent } from './admin/edit-profile/edit-profile.component';
import { NewPostComponent } from './admin/new-post/new-post.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '412m1n', component: AdminComponent, children: [
    { path: 'new-post', component: NewPostComponent },
    { path: 'admin-pr', component: EditProfileComponent }
  ] },
  { path: 'app', component: ProductComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
