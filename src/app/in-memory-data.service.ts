import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Captain America', power: 'Indestructible shield' },
      { id: 12, name: 'Spider-Man',      power: '“Danger sense” precognition' },
      { id: 13, name: 'Wolverine',       power: 'Regeneration' },
      { id: 14, name: 'Captain Marvel',  power: 'Energy absorption and manipulation' },
      { id: 15, name: 'Doctor Strange',  power: 'Jumps through dimensions' },
      { id: 16, name: 'Iron Man',        power: 'Genius-level intellect' },
      { id: 17, name: 'Professor X',     power: 'Telepathy' },
      { id: 18, name: 'Magneto',         power: 'Control of magnetic forces' },
      { id: 19, name: 'Thor',            power: 'Strength and durability' },
      { id: 20, name: 'Loki',            power: 'Mastery of magic and illusion' }
    ];
    const heroesOriginal = [
      { id: 11, name: 'Dr Nice', power: 'speed' },
      { id: 12, name: 'Narco', power: 'strength' },
      { id: 13, name: 'Bombasto', power: 'invisibility' },
      { id: 14, name: 'Celeritas', power: 'fly' },
      { id: 15, name: 'Magneta', power: 'xrays' },
      { id: 16, name: 'RubberMan', power: 'speed' },
      { id: 17, name: 'Dynama', power: 'speed' },
      { id: 18, name: 'Dr IQ', power: 'speed' },
      { id: 19, name: 'Magma', power: 'speed' },
      { id: 20, name: 'Tornado', power: 'speed' }
    ];

    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}