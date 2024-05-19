import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimesPageRoutingModule } from './times-routing.module';

import { TimesPage } from './times.page';
import { ListaTimesComponent } from 'src/listaTimes/listaTimes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimesPageRoutingModule
  ],
  declarations: [TimesPage, ListaTimesComponent]
})
export class TimesPageModule {}
