import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SixthCardPageRoutingModule } from './sixth-card-routing.module';

import { SixthCardPage } from './sixth-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SixthCardPageRoutingModule
  ],
  declarations: [SixthCardPage]
})
export class SixthCardPageModule {}
