import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';
import AOS from 'aos';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technoNewsData: any = [];
  todayDate: Date = new Date();

  constructor(private NewsapiServiceOj: NewsapiService) { }

  showTechnoData() {
    // debugger;
    this.NewsapiServiceOj.getTechnology().subscribe((result) => {
      console.log(result.articles);
      this.technoNewsData = result.articles;
    })
  }


  ngOnInit() {
    debugger;
    AOS.init();
    this.showTechnoData();


  }


}
