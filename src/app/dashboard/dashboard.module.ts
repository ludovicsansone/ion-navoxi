import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StationListComponent } from './components,/station-list/station-list.component';
import { StationComponent } from './components,/station/station.component';
import { PlaceComponent } from './components,/place/place.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [StationListComponent, StationComponent, PlaceComponent]
})
export class DashboardModule { }
