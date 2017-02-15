import { Component } from '@angular/core';
import { XlsxToJsonService } from './xlsx-to-json-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public result: any;
  private xlsxToJsonService: XlsxToJsonService = new XlsxToJsonService();

  constructor() {
  }
  handleFile(event) {
    let file = event.target.files[0];
    this.xlsxToJsonService.processFileToJson({}, file).subscribe(data => {
      this.result = JSON.stringify(data['sheets'].Sheet1);
    })

  }
}
