import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { RouteService } from '../../services/route.service';

@Component({
  selector: 'route-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    start: string; // Point de départ
    end: string; // Point d'arrivée'

    constructor(
    private router: Router,
    private locationService: LocationService,
    private routeService: RouteService) { }

    // Initialisation du composant
  ngOnInit() {
  }

  // Soumition du formulaire
  onSubmit(f: NgForm) {
      // Recherche de l'itinéraire en fonction de la saisie de l'utilisateur
      this.routeService.searchRoute(f.value.start, f.value.end);

      // Navigation vers les résultats de recherche
      this.router.navigate(['route-result']);
  }

  onLocateStation() {
      // Localisation de la station la plus proche
      this.locationService.getStartPoint().then((station: string) => {
          this.start = station;
      }, (error) => {
          alert("Impossible de vous localiser. Veuillez saisir ce champ manuellement.");
      }
      );
  }
}
