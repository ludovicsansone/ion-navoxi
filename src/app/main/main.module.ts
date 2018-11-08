// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouteModule } from '../route/route.module';
import { MainRoutingModule } from './main-routing.module';
import { SettingsModule } from '../settings/settings.module';
import { StationModule } from '../station/station.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { SncfModule } from '../sncf/sncf.module';

// Components
import { NavComponent } from './components/nav/nav.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FootComponent } from './components/foot/foot.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MainRoutingModule,
    RouteModule,
    SettingsModule,
    StationModule,
    DashboardModule,
    SncfModule
  ],
  declarations: [NavComponent, LayoutComponent, FootComponent],
  exports: [LayoutComponent],
})
export class MainModule { }
