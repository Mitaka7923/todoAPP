import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdCardDetailsPageRoutingModule } from './third-card-details-routing.module';

import { ThirdCardDetailsPage } from './third-card-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdCardDetailsPageRoutingModule
  ],
  declarations: [ThirdCardDetailsPage]
})
export class ThirdCardDetailsPageModule {}
