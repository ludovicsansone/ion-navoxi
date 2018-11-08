import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../../common-services/url.service';

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    constructor(
    private http: HttpClient,
    private urlService: UrlService) { }

    getStartPoint() {
        // Localisation de la position de la station la plus proche de l'utilisateur'
        const isLocable = true;

        return new Promise((resolve, reject) => {
            if (isLocable) {
              
                resolve("Saint Clair les Roches");
            }
            else
            reject();
        }
        );
    }

    getNetwork() {
        // Localisation du réseau de transport en commun sur lequel se trouve l'utilisateur
        const isLocable = true;

        return new Promise((resolve, reject) => {
            if (isLocable) {
                this.http.get<any>(this.urlService.currentPositionInfo).subscribe((data: any) => {
                    resolve(data.region);
                });
        }
            else
            reject("Inconu");
        });
    }

    getCity() {
        // Localisation de la ville dans laquelle se trouve l'utilisateur
        const isLocable = true;

        return new Promise((resolve, reject) => {
            if (isLocable) {
                this.http.get<any>(this.urlService.currentPositionInfo).subscribe((data) => {
                    if (data)
                        resolve(data.city);
                        else
                        reject("Localisation impossible");
                }, (err: any) => {
                    reject("Localisation impossible");
                });
            }
            else
            reject("Inconue");
        });
    }
}
