import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  @Input()
  list: string[];

  @Output()
  outDelName = new EventEmitter();

  constructor() {}

  del(name) {
    this.outDelName.emit(name);
  }
}
