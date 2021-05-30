import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VintedoisContraTerraPage } from './vintedois-contra-terra.page';

const routes: Routes = [
  {
    path: '',
    component: VintedoisContraTerraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VintedoisContraTerraPageRoutingModule {}
