import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NinthCardPage } from './ninth-card.page';

const routes: Routes = [
  {
    path: '',
    component: NinthCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NinthCardPageRoutingModule {}
