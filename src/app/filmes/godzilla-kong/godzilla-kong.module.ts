import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GodzillaKongPageRoutingModule } from './godzilla-kong-routing.module';

import { GodzillaKongPage } from './godzilla-kong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GodzillaKongPageRoutingModule
  ],
  declarations: [GodzillaKongPage]
})
export class GodzillaKongPageModule {}
