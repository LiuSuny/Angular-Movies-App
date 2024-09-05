import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieTitle = '';
  searchResult: any[] = [];

  constructor(private _activeRoute: ActivatedRoute,
     private httpClient: HttpClient) { 
    this._activeRoute.params.subscribe((p) =>{
       this.movieTitle =p['movieTitle']; //getting the value of param which is id     
    })
  }
  

  ngOnInit(): void {
    this.MovieSearch();
  }
    
  MovieSearch(){
    this.httpClient.get<any[]>('assets/data/searchMovies.json').subscribe((data:any[])=>{
      this.searchResult = data;
    })
  }
}
