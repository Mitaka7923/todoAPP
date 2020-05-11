import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourthCardDetailsPage } from './fourth-card-details.page';

const routes: Routes = [
  {
    path: '',
    component: FourthCardDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FourthCardDetailsPageRoutingModule {}
