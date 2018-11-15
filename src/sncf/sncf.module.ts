// Modules
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

// Components
import { RouteComponent } from './components/route/route';
import { HomeComponent }  from './components/home/home';
import { StoryComponent } from './components/story/story';

// Providers
import { RouteProvider } from './providers/route/route';
import { TtsProvider } from '../providers/tts/tts';

@NgModule({
    declarations: [
        RouteComponent,
        HomeComponent,
        StoryComponent
    ],
    imports: [
        IonicModule
    ],
    entryComponents: [
        RouteComponent,
        HomeComponent,
        StoryComponent
    ],
    exports: [
        RouteComponent,
        HomeComponent,
        StoryComponent
    ],
    providers: [
        RouteProvider,
        TtsProvider
    ]
})
export class SncfModule {}
