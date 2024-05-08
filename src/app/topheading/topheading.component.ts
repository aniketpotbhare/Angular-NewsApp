
import { Component, OnInit } from '@angular/core';
import { NewsapiService } from './../Service/newsapi.service';
import AOS from 'aos';
// import * as Aos from 'aos';


@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  // display news data
  topHeadingNewsData: any = [];

  todayDate:Date=new Date();
  // extra
  // creating obj>for set author 
  // author=true;
  // default imng
  // defaultImgUrl:string='https://unsplash.com/photos/bundle-of-newspaper-on-table-Mwuod2cm8g4';
  // carouselItems = [
  //   { heading: 'First Slide', content: 'This is the content of the first slide.' },
  //   { heading: 'Second Slide', content: 'This is the content of the second slide.' },
  //   { heading: 'Third Slide', content: 'This is the content of the third slide.' }
  // ];
  constructor(private NewsapiServiceObj: NewsapiService) { }
  // debugger
  showtopHeading() {
    this.NewsapiServiceObj.gettopHeading().subscribe((result) => {
      console.log(result.articles)
      this. topHeadingNewsData = result.articles;

    })
  }


  ngOnInit() {
    debugger;
    AOS.init();
    // Aos.init()
    this.showtopHeading();
  }
}
