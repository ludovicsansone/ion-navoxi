import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RouteComponent } from '../route/route';

import { RouteProvider } from '../../providers/route/route';

/**
 * Generated class for the HomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
    panel: Array<any>;
    station: string = "Lyon Perrache";
    //private ariaLabelPlatform: string = "Voie";

  constructor(
  public navCtrl: NavController,
  private routeProvider: RouteProvider) { }

  ngOnInit() {
      this.panel = [
      {typeTrain: 'TER', destination: 'Valence Ville', numero: '886712', heure: '10h42', quai: 'A'},
      {typeTrain: 'TER', destination: 'Clermont-Ferrand', numero: '874442', heure: '10h54', quai: 'B'},
      {typeTrain: 'TGV', destination: 'Nantes', numero: '5146', heure: '11h08', quai: 'C'},
      {typeTrain: 'TER', destination: 'Bourg En Bresse', numero: '856422', heure: '11h12', quai: 'D'},
      {typeTrain: 'TGV', destination: 'Bordeaux Saint-Jean', numero: '5158', heure: '11h21', quai: 'E'},
      {typeTrain: 'TGV', destination: 'Marseille Saint Charles', numero: '5428', heure: '11h30', quai: 'F'},
      {typeTrain: 'TGV', destination: 'Aix En Provence TGV', numero: '5825', heure: '11h38', quai: 'G'},
      ];
  }

  onStart(destination, quai, heure) {
      this.routeProvider.destination = destination;
      this.routeProvider.quai = quai;
      this.routeProvider.heure = heure;

      this.navCtrl.push(RouteComponent);
  }
}
