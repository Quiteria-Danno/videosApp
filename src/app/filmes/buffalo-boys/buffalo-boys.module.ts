import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuffaloBoysPageRoutingModule } from './buffalo-boys-routing.module';

import { BuffaloBoysPage } from './buffalo-boys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuffaloBoysPageRoutingModule
  ],
  declarations: [BuffaloBoysPage]
})
export class BuffaloBoysPageModule {}
