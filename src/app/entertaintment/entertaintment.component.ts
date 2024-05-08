import { NewsapiService } from './../Service/newsapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-entertaintment',
  templateUrl: './entertaintment.component.html',
  styleUrls: ['./entertaintment.component.css']
})
export class EntertaintmentComponent  implements OnInit{
  entertaintmentNewsData: any = [];
  todayDate: Date = new Date();

  constructor(private NewsapiServiceOj: NewsapiService) { }

  showEntert() {
    // debugger;
    this.NewsapiServiceOj.getEntertaintmnent().subscribe((result) => {
      console.log(result.articles);
      this.entertaintmentNewsData = result.articles;
    })
  }


  ngOnInit() {
    debugger;
    AOS.init();
    this.showEntert();


  }

}
