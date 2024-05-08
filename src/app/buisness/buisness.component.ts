import { NewsapiService } from './../Service/newsapi.service';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos' ;

@Component({
  selector: 'app-buisness',
  templateUrl: './buisness.component.html',
  styleUrls: ['./buisness.component.css']
})
export class BuisnessComponent implements OnInit {
  buisnessNewsData: any = [];
  todayDate: Date = new Date();

  constructor(private NewsapiServiceOj: NewsapiService) { }

  showBuisnessdata() {
    // debugger;
    this.NewsapiServiceOj.getBuisness().subscribe((result) => {
      console.log(result.articles);
      this.buisnessNewsData = result.articles;
    })
  }


  ngOnInit() {
    debugger;
    AOS.init();
    this.showBuisnessdata();


  }


}
