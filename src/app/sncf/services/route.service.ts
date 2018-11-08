import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
    public destination: string;
    public quai: string;
    public route: any;
    public routes = [
    {place: 'A', steps: [
    {position: 'couloir central', major: '42', minor: '1', instruction: 'suivez le couloir'},
    {position: 'couloir central', major: '42', minor: '2', instruction: 'tournez à 3 heures, et descendez l\'escalier'},
    {position: 'escalier d\'accès au quai A', major: '42', minor: '3', instruction: 'descendez l\'escalier'},
    {position: 'Quai A', major: '42', minor: '4', instruction: 'Vous êtes arrivé. Le quai A est à votre gauche'}
    ]},
    {place: 'B', steps: [
    {position: 'couloir central', major: '42', minor: '1', instruction: 'suivez le couloir'},
    {position: 'couloir central', major: '42', minor: '2', instruction: 'Continuez à suivre le couloir'},
    {position: 'couloir central', major: '42', minor: '5', instruction: 'tournez à 3 heures, et descendez l\escalier'},
    {position: 'escalier d\'accès au quai B et C', major: '42', minor: '6', instruction: 'descendez l\'escalier'},
    {position: 'Quai B et C', major: '42', minor: '7', instruction: 'vous êtes arrivé, le quai B se trouve à votre droite'}
    ]},
    {place: 'C', steps: [
    {position: 'couloir central', major: '42', minor: '1', instruction: 'suivez le couloir'},
    {position: 'couloir central', major: '42', minor: '2', instruction: 'Continuez à suivre le couloir'},
    {position: 'couloir central', major: '42', minor: '5', instruction: 'tournez à 3 heures, et descendez l\escalier'},
    {position: 'escalier d\'accès au quai B et C', major: '42', minor: '6', instruction: 'descendez l\escalier'},
    {position: 'Quai B et C', major: '42', minor: '7', instruction: 'vous êtes arrivé, le quai C se trouve à votre gauche'}
    ]},
    ];

  constructor() { }

  getRoute(place: string) {
      this.route = this.routes.find((route: any) => {
          if (route.place == place)
          return (route);
      });
      return this.route;
  }

  getStep(index: number) {
      return (this.route.steps[index]);
  }
}
