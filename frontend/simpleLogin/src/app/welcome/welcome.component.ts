import { WelcomeBean, WelcomeDataService } from './../service/data/welcome-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  welcomeMessageFromService = ''
  name = ''

  constructor(
    private route: ActivatedRoute, private service: WelcomeDataService) {
  }

  ngOnInit() {

    this.name = this.route.snapshot.params['name'];
    this.getWelcomeMessageWithParameter();

  }


  getWelcomeMessageWithParameter() {


    this.service.executeWelcomeServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)

    );

  }


  handleSuccessfulResponse(response: WelcomeBean) {
    this.welcomeMessageFromService = response.message
  }
}
