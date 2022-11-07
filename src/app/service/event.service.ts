import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  firstEvent: Event= new Event (
    'John',
    '2022.12.02',
    '10:30',
    new Location ('Hársfa 5', 'Makó', 'Magyarország')
  );
  secondEvent: Event = new Event(
    'Doe',
    '2022.12.12',
    '11:30',
    new Location ('Dodge str 5', 'Chicago', 'Usa')
  );
  thirdEvent: Event= new Event(
    'Jane',
    '2022.12.22',
    '12:30',
    new Location('asda str 3', 'London', 'Uk')
  );


  constructor() { }

  getAll(): Event []{
    return [this.firstEvent, this.secondEvent, this.thirdEvent];
  }
}
