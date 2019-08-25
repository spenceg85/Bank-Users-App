import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, transition, keyframes } from '@angular/animations';
import { TestService } from './test.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Bank';
  restItems: any;
  cardObjects: any[];

  constructor(private testService: TestService, public sanitizer: DomSanitizer) {}


  ngOnInit() {
    this.getRestItems();
  }

  getRestItems(): void {
    this.testService.getAll()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
          this.cardObjects = [];
          this.restItems.forEach(element => {
            const title = element.name.title;
            const firstName = element.name.first;
            const lastName = element.name.last;
            const city = element.location.city;
            const state = element.location.state;
            const street = element.location.street;
            const pic = element.picture.large;
            const fullName = title + ' ' + firstName + ' ' + lastName;
            const streetLoc = street + ' ';
            const location =  city + ', ' + state;
            this.cardObjects.push({fullName, location, streetLoc, pic});
          });
        }
      );
  }
}
