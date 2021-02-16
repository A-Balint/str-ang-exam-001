import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private dataList: Hero[] = [{
    id: 1,
    name: 'Superman',
    superPower: 'invulnerability',
    address: 'Metropolis',
  }, {
    id: 2,
    name: 'Batman',
    superPower: 'exceptional martial artist',
    address: 'Gotham City',
  }, {
    id: 3,
    name: 'Wonder Woman',
    superPower: 'magic weaponry',
    address: 'New York',
  }, {
    id: 4,
    name: 'Green Lantern',
    superPower: 'hard light constructs',
    address: 'Coast City',
  }, {
    id: 5,
    name: 'The Flash',
    superPower: 'super speed',
    address: 'Central City',
  }];

  constructor() { }

  getAll(): Array<Hero> {
    return this.dataList;
  }
}
