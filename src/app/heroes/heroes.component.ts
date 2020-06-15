import { Component, OnInit } from '@angular/core';
import {HEROS} from '../mock-heroes';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros:Hero[] = HEROS;
  selectedHero:Hero;
  constructor() { }

  ngOnInit() {
  }

  onSelect(hero){
  this.selectedHero = hero;
  }

}