import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangesPageRoutingModule } from './changes-routing.module';

import { ChangesPage } from './changes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangesPageRoutingModule
  ],
  declarations: [ChangesPage]
})
export class ChangesPageModule { }
