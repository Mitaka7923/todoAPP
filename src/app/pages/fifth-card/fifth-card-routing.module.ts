import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FifthCardPage } from './fifth-card.page';

const routes: Routes = [
  {
    path: '',
    component: FifthCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FifthCardPageRoutingModule {}
