import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NinthCardPageRoutingModule } from './ninth-card-routing.module';

import { NinthCardPage } from './ninth-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NinthCardPageRoutingModule
  ],
  declarations: [NinthCardPage]
})
export class NinthCardPageModule {}
