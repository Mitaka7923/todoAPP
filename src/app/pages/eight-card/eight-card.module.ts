import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EightCardPageRoutingModule } from './eight-card-routing.module';

import { EightCardPage } from './eight-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EightCardPageRoutingModule
  ],
  declarations: [EightCardPage]
})
export class EightCardPageModule {}
