import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FifthCardPageRoutingModule } from './fifth-card-routing.module';

import { FifthCardPage } from './fifth-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FifthCardPageRoutingModule
  ],
  declarations: [FifthCardPage]
})
export class FifthCardPageModule {}
