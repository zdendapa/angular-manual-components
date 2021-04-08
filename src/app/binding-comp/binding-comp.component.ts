import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-comp',
  templateUrl: './binding-comp.component.html',
  styleUrls: ['./binding-comp.component.css']
})
export class BindingCompComponent implements OnInit {

    hero;
    heroSecond;
    heroThird;

  constructor() {
    this.hero = { name: "Patermutia" };
    this.heroSecond = { name: "Kopria" };
    this.heroThird = { name: "Marie Egyptská" };
    console.log(this.hero.name);
  }

  ngOnInit() {
  }

  aa(event){
    console.log(event);
  };

}