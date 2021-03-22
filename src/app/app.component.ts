import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  list: string[];

  ngOnInit() {
    this.reset();
  }

  delName(delName) {
    console.log(delName);
    this.list = this.list.filter(n => n != delName);
  }

  reset() {
    this.list = ["Josef", "Šarbel", "Marie", "Petr"];
  }
}
