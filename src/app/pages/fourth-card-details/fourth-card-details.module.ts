import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FourthCardDetailsPageRoutingModule } from './fourth-card-details-routing.module';

import { FourthCardDetailsPage } from './fourth-card-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FourthCardDetailsPageRoutingModule
  ],
  declarations: [FourthCardDetailsPage]
})
export class FourthCardDetailsPageModule {}
