import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondCardDetailsPage } from './second-card-details.page';

const routes: Routes = [
  {
    path: '',
    component: SecondCardDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondCardDetailsPageRoutingModule {}
