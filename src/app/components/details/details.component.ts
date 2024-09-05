import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges, AfterContentInit, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit /*OnChanges, 
AfterContentInit, AfterViewInit*/ {

  // stars = ['Star #1 Name', 'Star #2 Name', 'Star #3 Name'];
  // directors = ['Director #1 Name', 'Director #2 Name', 'Director #3 Name'];
  // genres = ['Genre #1 Name', 'Genre #2 Name', 'Genre #3 Name'];

  stars = [];
  directors = [];
  genres = [];



  movieId ='';

  constructor(private _activeRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { 
    this._activeRoute.params.subscribe((p) => {
       this.movieId = p["id"]; 
       console.log('movie id  = ' + this.movieId);
    })
  }
  
  ngOnInit(): void {
    this.loadMovieSummary();
  }

  loadMovieSummary(){
    this.httpClient.get('assets/data/movieSummary.json').subscribe((data:any)=>{
      this.stars = data.stars;
      this.directors = data.directors;
      this.genres = data.genres;
    })
  }

  // ngOnChanges(): void {
  //   console.log('ngOnChanges is called');
  // }
  
 
  
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit is called');
    
  // }
  
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit is called');
  // }

  
}
