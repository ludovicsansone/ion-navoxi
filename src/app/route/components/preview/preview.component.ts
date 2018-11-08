import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { Subscription } from 'rxjs';
import { TtsService } from '../../../common-services/tts.service';
import { SettingsService } from '../../../common-services/settings.service';

@Component({
    selector: 'route-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {
    private route: any; // Itinéraire courant
    private nextStart: string = "En recherche"; // Délai du prochain départ
    private nextStartSubscription: Subscription; // Souscription à l'observateur observant le prochain départ

    constructor(
    private routeService: RouteService,
    private ttsService: TtsService,
    private settingsService: SettingsService) { }

    // Initialisation du composant
    ngOnInit() {
        // Récupération de l'itinéraire courant
        this.route = this.routeService.selectedRoute;

        // Début de la souscription à l'observable observant le prochain départ'
        let newStart: string = "";
        this.nextStartSubscription = this.routeService.nextStart.subscribe((data: string) => {
            this.nextStart = data;
            if (this.nextStart != newStart) {
                if (this.settingsService.getSettingValue('nextStartSpeech') == 'true')
                this.ttsService.sayMessage("Prochain départ, " + this.nextStart);
                newStart = this.nextStart;
            }
        });
    }

    // Destruction du composant
    ngOnDestroy() {
        // Fin de l'observation du prochain départ'
        this.nextStartSubscription.unsubscribe();
    }

    onStartRoute() {
        // Démarrage de l'itinéraire
    }
  
    onRepeatNextStart() {
        this.ttsService.sayMessage("Prochain départ, " + this.nextStart);  
    }
}
