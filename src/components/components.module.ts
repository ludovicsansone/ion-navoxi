import { NgModule } from '@angular/core';
import { TestComponent } from './test/test';
import { RouteComponent } from './route/route';
import { HomeComponent } from './home/home';

@NgModule({
    declarations: [
    TestComponent,
    RouteComponent,
    HomeComponent
    ],
    imports: [],
    entryComponents: [
    TestComponent,
    RouteComponent
    ],
    exports: [
    TestComponent,
    RouteComponent,
    HomeComponent
    ]
})
export class ComponentsModule {}
