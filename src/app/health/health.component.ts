import { Component, OnInit,  } from '@angular/core';
import AOS from 'aos';
import { NewsapiService } from '../Service/newsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  healthNewsData: any = [];
  todayDate: Date = new Date();

  constructor(private NewsapiServiceOj: NewsapiService) { }

  showHealthsdata() {
    // debugger;
    this.NewsapiServiceOj.getHealth().subscribe((result) => {
      console.log(result.articles);
      this.healthNewsData = result.articles;
    })
  }


  ngOnInit() {
    debugger;
    AOS.init();
    this.showHealthsdata();


  }

}
