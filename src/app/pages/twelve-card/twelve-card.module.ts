import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwelveCardPageRoutingModule } from './twelve-card-routing.module';

import { TwelveCardPage } from './twelve-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwelveCardPageRoutingModule
  ],
  declarations: [TwelveCardPage]
})
export class TwelveCardPageModule {}
