import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VintedoisContraTerraPageRoutingModule } from './vintedois-contra-terra-routing.module';

import { VintedoisContraTerraPage } from './vintedois-contra-terra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VintedoisContraTerraPageRoutingModule
  ],
  declarations: [VintedoisContraTerraPage]
})
export class VintedoisContraTerraPageModule {}
