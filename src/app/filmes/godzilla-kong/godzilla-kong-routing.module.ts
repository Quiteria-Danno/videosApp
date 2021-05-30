import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GodzillaKongPage } from './godzilla-kong.page';

const routes: Routes = [
  {
    path: '',
    component: GodzillaKongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GodzillaKongPageRoutingModule {}
