import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersEffects } from '../store/effects/users.effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class SignInModule { }
