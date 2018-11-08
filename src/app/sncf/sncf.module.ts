import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteService } from './services/route.service';

import { SncfRoutingModule } from './sncf-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RouteComponent } from './components/route/route.component';

@NgModule({
  imports: [
    CommonModule,
    SncfRoutingModule
  ],
  declarations: [HomeComponent, RouteComponent],
  providers: [RouteService]
})
export class SncfModule { }
