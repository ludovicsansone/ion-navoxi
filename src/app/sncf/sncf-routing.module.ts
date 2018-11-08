import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RouteComponent } from './components/route/route.component';

const routes: Routes = [{
    path: 'sncf-home',
    component: HomeComponent
},
{
    path: 'sncf-route',
    component: RouteComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SncfRoutingModule { }
