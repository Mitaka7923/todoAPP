import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdCardDetailsPage } from './third-card-details.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdCardDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdCardDetailsPageRoutingModule {}
