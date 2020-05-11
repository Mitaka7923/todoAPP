import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondCardDetailsPageRoutingModule } from './second-card-details-routing.module';

import { SecondCardDetailsPage } from './second-card-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondCardDetailsPageRoutingModule
  ],
  declarations: [SecondCardDetailsPage]
})
export class SecondCardDetailsPageModule {}
