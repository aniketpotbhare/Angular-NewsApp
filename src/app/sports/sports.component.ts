import { Component ,OnInit} from '@angular/core';
import { NewsapiService } from '../Service/newsapi.service';
import AOS from 'aos';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sportsNewsData: any = [];
  todayDate: Date = new Date();

  constructor(private NewsapiServiceOj: NewsapiService) { }

  showSportsdata() {
    // debugger;
    this.NewsapiServiceOj.getSports().subscribe((result) => {
      console.log(result.articles);
      this.sportsNewsData = result.articles;
    })
  }


  ngOnInit() {
    debugger;
    AOS.init();
    this.showSportsdata();


  }

}
