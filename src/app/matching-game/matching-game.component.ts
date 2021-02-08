import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { Pair } from '../pair';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-matching-game',
  templateUrl: './matching-game.component.html',
  styleUrls: ['./matching-game.component.css']
})

export class MatchingGameComponent implements OnInit {
  heroes: Hero[];
  matchedItems: Hero[] = new Array();
  unmatchedItems: Hero[] = new Array();
  solved: boolean = false;
  attempts: number = 0;
  leftpartSelectedId = -1;
  rightpartSelectedId = -1;

  // private _items: Pair[] = new Array();
  // private _matchedItems: Pair[] = [];
  // private _unmatchedItems: Pair[] = [];
  // private _solved: boolean = false;
  // private _attempts: number = 0;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes;
      this.setupGame();
    });
  }
  
  resetGame() {
    this.heroes = new Array();
    this.matchedItems = new Array();
    this.unmatchedItems = new Array();
    this.solved = false;
    this.leftpartSelectedId = -1;
    this.rightpartSelectedId = -1;
    this.attempts = 0;
    this.getHeroes();
  }

  setupGame() {
    this.unmatchedItems = new Array();
    this.matchedItems = new Array();
    for(let i=0; i<this.heroes.length; i++){    
        this.unmatchedItems.push(this.heroes[i]);
    }
  }

  leftpartSelect(id:number):void{
    this.leftpartSelectedId = id;
    this.checkIfMatched();
  }
  rightpartSelect(id:number):void{
    this.rightpartSelectedId = id;
    this.checkIfMatched();
  }
  leftpartUnselect():void{
      this.leftpartSelectedId = -1;
  }
  rightpartUnselect():void{
      this.rightpartSelectedId = -1;
  }
  
  checkIfMatched() {
    if (this.leftpartSelectedId !== -1 && this.rightpartSelectedId !== -1) {
      this.attempts++;
      if (this.leftpartSelectedId === this.rightpartSelectedId) {
        let _arr = [...this.unmatchedItems].filter(item => item.id === this.leftpartSelectedId);
        if (_arr.length > 0) {
          this.matchedItems.push(_arr[0]);
          this.unmatchedItems = this.unmatchedItems.filter(item => item.id !== _arr[0].id);
          if (this.unmatchedItems.length === 0) {
            this.solved = true;
          }
        }
      }
      this.leftpartUnselect();
      this.rightpartUnselect();
    }
  }
}
