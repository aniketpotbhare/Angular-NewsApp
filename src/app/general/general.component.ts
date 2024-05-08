import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';
import AOS from 'aos';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit{
  generalNewsData: any = [];
  todayDate: Date = new Date();

  constructor(private NewsapiServiceOj: NewsapiService) { }

  showGeneraldata() {
    // debugger;
    this.NewsapiServiceOj.getgeneral().subscribe((result) => {
      console.log(result.articles);
      this. generalNewsData = result.articles;
    })
  }


  ngOnInit() {
    debugger;
    AOS.init();
    this.showGeneraldata();


  }

}