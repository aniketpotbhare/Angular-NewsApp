import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';
import AOS from 'aos';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit{
  scienceNewsData: any = [];
  todayDate: Date = new Date();

  constructor(private NewsapiServiceOj: NewsapiService) { }

  showSciencedata() {
    // debugger;
    this.NewsapiServiceOj.getScience().subscribe((result) => {
      console.log(result.articles);
      this. scienceNewsData = result.articles;
    })
  }


  ngOnInit() {
    debugger;
    AOS.init();
    this.showSciencedata();


  }

}