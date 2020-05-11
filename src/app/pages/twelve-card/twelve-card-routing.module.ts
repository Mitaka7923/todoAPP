import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwelveCardPage } from './twelve-card.page';

const routes: Routes = [
  {
    path: '',
    component: TwelveCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwelveCardPageRoutingModule {}
