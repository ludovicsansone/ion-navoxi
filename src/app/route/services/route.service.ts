import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../../common-services/url.service';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RouteService implements OnInit {
    public routes: Array<any>; // Tableau des itinéraires proposés
    public selectedRoute: any; // Itinéraire sélectionné parmi la liste
    private headers = new HttpHeaders({"Content-Type": "application/json"}); // Entêtes des requêtes http
    public nextStart = new Subject(); // Observable vers le prochain départ
    private nextStartInterval: any;

    constructor(
    private _http: HttpClient,
    private url: UrlService) {
        // Début de l'observation du prochain départ
        this.getNextStart();
    }

    ngOnInit() {

    }
     searchRoute(start, end) {
        // Recherche des itinéraires possibles pour le trajet donné
        const routes = [
        {id: '0', start: start, end: end, time: '28 minutes', step_number: '0'},
        {id: '1', start: start, end: end, time: '55 minutes', step_number: '1'},
        ];

        this.routes = routes;
    }

    selectRoute(id) {
        // Sélection de l'itinéraire parmi les choix proposé
        this.selectedRoute = this.routes.find((item) => {
            if (item.id === id)
            return (item);
        });
    }

    getNextStart() {
        // Observation du prochain départ pour l'itinéraire sélectionné
        this.nextStartAux();
        this.nextStartInterval = setInterval(() => {
            this.nextStartAux();
        }, 10000);
    }

    nextStartAux() {
        this._http.get<any>(this.url.nextStart, {headers: this.headers}).subscribe((data: any) => {
            this.nextStart.next(data.values[0].delaipassage);
        });
    }

    stopGetNextStart() {
        clearInterval(this.nextStartInterval);
    }
}
