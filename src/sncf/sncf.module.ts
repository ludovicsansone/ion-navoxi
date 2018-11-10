// Modules
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

// Components
import { RouteComponent } from './components/route/route';
import { HomeComponent }  from './components/home/home';

// Providers
import { RouteProvider } from './providers/route/route';
import { TtsProvider } from '../providers/tts/tts';

@NgModule({
    declarations: [
        RouteComponent,
        HomeComponent
    ],
    imports: [
        IonicModule
    ],
    entryComponents: [
        RouteComponent,
        HomeComponent
    ],
    exports: [
        RouteComponent,
        HomeComponent
    ],
    providers: [
        RouteProvider,
        TtsProvider
    ]
})
export class SncfModule {}
