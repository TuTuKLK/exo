import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { ChronoComponent } from './components/chrono/chrono.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChronoComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule
  ]
})
export class ExerciceModule { }
