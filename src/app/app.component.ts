import { Component ,OnInit} from '@angular/core';
import { NewsapiService } from './Service/newsapi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  searchdata: any = [];
  todayDate:Date=new Date();
  searchField:boolean=false;

  constructor(private NewsapiServiceObj: NewsapiService) { }

  showSearchNews(event: any) {
    debugger;
    // 
    this.searchField=true;
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

    //  debugger;
    // this.showSearchNews();
  }
}