import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { Router } from '@angular/router';

@Component({
    selector: 'route-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
    private routes: Array<any>; // Listes des itinéraires possibles

    constructor(
    private routeService: RouteService,
    private router: Router) { }

    ngOnInit() {
        // Envoi de la liste d'itinéraire possible depuis le service routeService
        this.routes = this.routeService.routes;
    }

    onSelectRoute(id) {
        // Sélection de l'itinéraire par son id
        this.routeService.selectRoute(id);

        // Navigation vers l'aperçu de l'itinéraire sélectionné
        this.router.navigate(['route-preview']);
    }
}
