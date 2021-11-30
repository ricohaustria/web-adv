# HTML Api's

[Web API Referenz](https://developer.mozilla.org/de/docs/Web/API)

[HTML5 JavaScript API Index](http://html5index.org/)

[HTLM Apis Collection](https://girliemac.com/presentation-slides/html5-mobile-approach/deviceAPIs.html)

> Note: Allows replacing Plugins by HTML Standard. Example Cordova Geolocation Plugin:

```typescript
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

declare var navigator;

@Injectable({
  providedIn: "root"
})
export class GeoServiceHTMLService {
  constructor() {}

  getCurrentPosition(): Observable<any> {
    // Wrapping a callback funtion to Observable
    // navigator.geolocation.getCurrentPosition(success[, error[, [options]])
    return Observable.create(observer => {
      navigator.geolocation.getCurrentPosition(position => {
        observer.next(position);
        observer.complete();
      }, observer.error.bind(observer));
    });
  }
}
```