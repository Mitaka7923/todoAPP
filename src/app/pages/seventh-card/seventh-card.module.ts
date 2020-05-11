import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeventhCardPageRoutingModule } from './seventh-card-routing.module';

import { SeventhCardPage } from './seventh-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeventhCardPageRoutingModule
  ],
  declarations: [SeventhCardPage]
})
export class SeventhCardPageModule {}
