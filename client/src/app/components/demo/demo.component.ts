import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "name";
  public sortOrder = "asc";

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.http.get("./assets/data.json")
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 1000);
      });
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

}
