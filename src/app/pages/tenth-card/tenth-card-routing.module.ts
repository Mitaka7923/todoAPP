import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenthCardPage } from './tenth-card.page';

const routes: Routes = [
  {
    path: '',
    component: TenthCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenthCardPageRoutingModule {}
