import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ResponseService } from './ResponseService/response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primaa_test_front';

  constructor(private reponse: ResponseService) {

  }

  sendRequest() {
    this.reponse.getResponse().subscribe((data) => {
      alert(data)
    })
    
  }

}
