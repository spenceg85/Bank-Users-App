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
            //const title = element.name.title.replace(/^\w/, c => c.toUpperCase());
            const firstName = element.name.first.capitalize();//.replace(/^\w/, c => c.toUpperCase());
            const lastName = element.name.last.capitalize();//.replace(/^\w/, c => c.toUpperCase());
            const city = element.location.city.capitalize();//.replace(/^\w/, c => c.toUpperCase());
            const state = element.location.state.capitalize();//.replace(/^\w/, c => c.toUpperCase());
            const street = element.location.street.capitalize();//.slice(1).replace(/^\w/, c => c.toUpperCase());
            const pic = element.picture.large;
            const fullName = firstName + ' ' + lastName;
            const streetLoc = street + ' ';
            const location =  city + ', ' + state;
            this.cardObjects.push({fullName, location, streetLoc, pic});
          });
        }
      );
  }
}
