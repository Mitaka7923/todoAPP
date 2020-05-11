import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleCardPage } from './ele-card.page';

const routes: Routes = [
  {
    path: '',
    component: EleCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleCardPageRoutingModule {}
