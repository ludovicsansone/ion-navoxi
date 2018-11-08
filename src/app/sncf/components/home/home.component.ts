import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-sncf',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    panel: Array<any>;
    station: string = "Lyon Perrache";

  constructor(
  private routerService: Router,
  private routeService: RouteService) { }

  ngOnInit() {
      this.panel = [
      {typeTrain: 'TER', destination: 'Valence Ville', numero: '886712', heure: '10h42', quai: 'A'},
      {typeTrain: 'TER', destination: 'Clermont-Ferrand', numero: '874442', heure: '10h54', quai: 'B'},
      {typeTrain: 'TGV', destination: 'Paris Gare de Lyon', numero: '5146', heure: '11h08', quai: 'C'},
      ];
  }

  onStart(destination, quai) {
      this.routeService.destination = destination;
      this.routeService.quai = quai;
      this.routerService.navigate(['sncf-route']);
  }
}
