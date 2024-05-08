import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';
import AOS from 'aos';
import { query } from '@angular/animations';

@Component({
  selector: 'app-searchnews',
  templateUrl: './searchnews.component.html',
  styleUrls: ['./searchnews.component.css']
})
export class SearchnewsComponent implements OnInit {

 searchdata: any = [];
todayDate:Date=new Date();


constructor(private NewsapiServiceObj: NewsapiService) { }

showSearchNews(event: any) {
  debugger;
  const query = event.target.value;
  this.NewsapiServiceObj.searchNews(query).subscribe((data) => {
    console.log(this.searchdata = data.articles);
    this.searchdata = data.articles; 
  },
  (error) => {
    console.error('Error fetching search results:', error);
  }
);
} 

 ngOnInit() {
    AOS.init();
   debugger;
  this.showSearchNews(query);
}
}