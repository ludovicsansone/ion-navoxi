import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../route/services/location.service';

@Component({
  selector: 'main-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
    network: string;
    city: string;

  constructor(
  private location: LocationService) { }

  ngOnInit() {
      this.location.getNetwork().then((network: string) => {
          this.network = network;
      }, (error: string) => {
          this.network = error;
      });

      this.location.getCity().then((city: string) => {
          this.city = city;
      });
    }
}
