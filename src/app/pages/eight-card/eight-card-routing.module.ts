import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EightCardPage } from './eight-card.page';

const routes: Routes = [
  {
    path: '',
    component: EightCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EightCardPageRoutingModule {}
