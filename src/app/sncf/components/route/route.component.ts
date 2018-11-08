import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { TtsService } from '../../../common-services/tts.service';

@Component({
  selector: 'sncf-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
    private destination: string;
    private quai: string;
    private route: any;
    private step: any;
    private routeIndex: number = -1;

  constructor(
  private ttsService: TtsService,
  private routeService: RouteService) { }

  ngOnInit() {
      this.destination = this.routeService.destination;
      this.quai = this.routeService.quai;
      this.ttsService.sayMessage("Je vous emmène jusqu'au quai " + this.quai + ", pour prendre le train en direction de " + this.destination);
      this.route = this.routeService.getRoute(this.quai);
      this.onNextStep();
  }

  onRepeat() {
      this.ttsService.sayMessage(this.step.instruction);
  }

  onNextStep() {
      let maxIndex = this.route.steps.length - 1;

      if (this.routeIndex < maxIndex) {
          this.routeIndex += 1;
          this.step = this.routeService.getStep(this.routeIndex);
       this.ttsService.sayMessage(this.step.instruction);
      }
      else
          this.ttsService.sayMessage("Vous êtes arrivé");
  }
}
