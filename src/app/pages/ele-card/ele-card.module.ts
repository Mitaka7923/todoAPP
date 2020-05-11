import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleCardPageRoutingModule } from './ele-card-routing.module';

import { EleCardPage } from './ele-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleCardPageRoutingModule
  ],
  declarations: [EleCardPage]
})
export class EleCardPageModule {}
