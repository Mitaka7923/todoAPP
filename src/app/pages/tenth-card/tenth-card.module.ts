import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenthCardPageRoutingModule } from './tenth-card-routing.module';

import { TenthCardPage } from './tenth-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenthCardPageRoutingModule
  ],
  declarations: [TenthCardPage]
})
export class TenthCardPageModule {}
