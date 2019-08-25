import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  protected url = 'https://randomuser.me/api/?inc=name,location,picture&results=9&nat=us';

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

    // Rest Items Service: Read all REST Items
    getAll() {
      return this.http
        .get<any[]>(this.url)
        .pipe(map(data => data['results']));
    }

}
