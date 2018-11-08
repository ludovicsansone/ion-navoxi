// Import des modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouteRoutingModule } from './route-routing.module';

// Import des composants
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { PreviewComponent } from './components/preview/preview.component';

// Import des services
import { LocationService } from './services/location.service';
import { RouteService } from './services/route.service';

@NgModule({
  imports: [
    CommonModule,
    RouteRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [SearchComponent, ResultComponent, PreviewComponent],
  providers: [LocationService, RouteService]
})
export class RouteModule { }
