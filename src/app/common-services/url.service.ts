import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
    currentPositionInfo: string = "https://ipinfo.io";
    nextStart = 'http://dev.ludovicsansone.com/navoxi-api/web/station';

  constructor() { }
}
