import { Component } from '@angular/core';
import { RouteProvider } from '../../providers/route/route';
import { TtsProvider } from '../../../providers/tts/tts';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the RouteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'route',
  templateUrl: 'route.html'
})
export class RouteComponent {
    private destination: string;
    private quai: string;
    private route: any;
    private step: any;
    private routeIndex: number = -1;

  constructor(
  public nav: NavController,
  private routeProvider: RouteProvider,
  private ttsProvider: TtsProvider) { }

  ngOnInit() {
      this.destination = this.routeProvider.destination;
      this.quai = this.routeProvider.quai;
      this.ttsProvider.sayMessage("Je vous emmène jusqu'au quai " + this.quai + ", pour prendre le train en direction de " + this.destination);
      this.route = this.routeProvider.getRoute(this.quai);
      this.onNextStep();
  }

  onRepeat() {
      this.ttsProvider.sayMessage(this.step.instruction);
  }

  onNextStep() {
      let maxIndex = this.route.steps.length - 1;

      if (this.routeIndex < maxIndex) {
          this.routeIndex += 1;
          this.step = this.routeProvider.getStep(this.routeIndex);
       this.ttsProvider.sayMessage(this.step.instruction);
      }
      else
          this.ttsProvider.sayMessage("Vous êtes arrivé");
  }
  
  onReturn() {
      this.nav.pop();
  }

}
