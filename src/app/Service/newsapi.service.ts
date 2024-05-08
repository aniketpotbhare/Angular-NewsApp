import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private HttpClientObj:HttpClient) { }
  // backup api key
  // apikey='2550e84ea75341bb99a5927cc186ac93, -ashupotbhare@gmail.com
  // apikey='1ef10067b7654daa80757a9a8b47d9fe' - annaji's gmail
  // 
  // apikey = '329049c3c3da44438b55307af192c894'; // t-api key 
  // apikey = '2dabcd62ba2e4bb38e76d8ae929f93a6'; / another personal api key 
  // apikey = '83f53e6a38aa4781acc0bae1836e5b87';
  apikey = '80815f3772b34e07b273dfd2bf905a34'   // yt

  //1) topheading news()
  gettopHeading():Observable<any>{
    // return this.HttpClientObj.get('https://newsapi.org/v2/everything?q=tesla&from=2024-03-25&sortBy=publishedAt&apiKey='+this.apikey);
    return this.HttpClientObj.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.apikey);
  }
  //  2)buisness
  getBuisness():Observable<any>{
    return this.HttpClientObj.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey='+this.apikey );

  }
  //  3)science
  getScience():Observable<any>{
    return this.HttpClientObj.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey='+this.apikey);

  }
  //  4)entertaintment NESWSS
  getEntertaintmnent():Observable<any>{
    return this.HttpClientObj.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey='+this.apikey);

  }
  //  5)health nwz
  getHealth():Observable<any>{
    return this.HttpClientObj.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey='+this.apikey);

  }
  //  6>Sports News
  getSports():Observable<any>{
    return this.HttpClientObj.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey='+this.apikey);
    
  }

  //  7>Global News
  getgeneral():Observable<any>{
    return this.HttpClientObj.get('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey='+this.apikey);
    
  }
    //  7> 8technology News
    getTechnology():Observable<any>{
      return this.HttpClientObj.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey='+this.apikey);
      
    }
    // for searching news >basd on query
  searchNews(query: string): Observable<any> {
    return this.HttpClientObj.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=2550e84ea75341bb99a5927cc186ac93`);
  }

}


























// ____________________





// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class NewsapiService {

//   private apiKeys: string[] = [
//     '2550e84ea75341bb99a5927cc186ac93',
//    '1ef10067b7654daa80757a9a8b47d9fe', 
//    '329049c3c3da44438b55307af192c894'
//   ];
//   private currentApiKeyIndex: number = 0;

//   constructor(private httpClient: HttpClient) { }

//   private getCurrentApiKey(): string {
//     return this.apiKeys[this.currentApiKeyIndex];
//   }

//   private switchApiKey(): void {
//     this.currentApiKeyIndex = (this.currentApiKeyIndex + 1) % this.apiKeys.length;
//   }

//   private fetchDataWithRetry(url: string): Observable<any> {
//     return this.httpClient.get(url).pipe(
//       catchError(error => {
//         if (error.status === 401 || error.status === 403) {
//           // If API key is not authorized/errors, then> change APIkey
//           this.switchApiKey();
//           // Retry wd>  new API key
//           return this.fetchDataWithRetry(url);
//         } else {
//           // throws > error
//           return throwError(error);
//         }
//       })
//     );
//   }

//   gettopHeading(): Observable<any> {
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.getCurrentApiKey()}`;
//     return this.fetchDataWithRetry(apiUrl);
//   }

//   getBuisness(): Observable<any> {
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.getCurrentApiKey()}`;
//     return this.fetchDataWithRetry(apiUrl);
//   }

//   getScience(): Observable<any> {
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${this.getCurrentApiKey()}`;
//     return this.fetchDataWithRetry(apiUrl);
//   }

//   getEntertaintmnent(): Observable<any> {
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${this.getCurrentApiKey()}`;
//     return this.fetchDataWithRetry(apiUrl);
//   }

//   getHealth(): Observable<any> {
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${this.getCurrentApiKey()}`;
//     return this.fetchDataWithRetry(apiUrl);
//   }

//   getSports(): Observable<any> {
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${this.getCurrentApiKey()}`;
//     return this.fetchDataWithRetry(apiUrl);
//   }

//   getgeneral(): Observable<any> {
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${this.getCurrentApiKey()}`;
//     return this.fetchDataWithRetry(apiUrl);
//   }

//   getTechnology(): Observable<any> {
//     const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${this.getCurrentApiKey()}`;
//     return this.fetchDataWithRetry(apiUrl);
//   }

//   searchNews(query: string): Observable<any> {
//     const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${this.getCurrentApiKey()}`;
//     return this.fetchDataWithRetry(apiUrl);
//   }
// }

