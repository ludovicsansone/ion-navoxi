import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { PreviewComponent } from './components/preview/preview.component';

const routes: Routes = [
{
    path: 'route-search',
    component: SearchComponent
},
{
    path: 'route-result',
    component: ResultComponent
},
{
    path: 'route-preview',
    component: PreviewComponent
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RouteRoutingModule { }
