import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuffaloBoysPage } from './buffalo-boys.page';

const routes: Routes = [
  {
    path: '',
    component: BuffaloBoysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuffaloBoysPageRoutingModule {}
