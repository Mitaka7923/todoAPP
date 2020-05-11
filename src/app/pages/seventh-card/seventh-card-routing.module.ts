import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeventhCardPage } from './seventh-card.page';

const routes: Routes = [
  {
    path: '',
    component: SeventhCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeventhCardPageRoutingModule {}
