
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { PostComponent } from './post/post.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    PostComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
