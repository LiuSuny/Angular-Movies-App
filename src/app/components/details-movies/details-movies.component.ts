import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent implements OnInit {

  // fanSimilarMovies : any[] = 
  // [ 
  //       {
  //        ImageURL: '../../../assets/images/card.jpg',
  //        title : 'Movies #1 Title',              
  //        rate : 9.1     
  //       },
 
  //       {
  //         ImageURL: '../../../assets/images/card.jpg',
  //         title : 'Movies #2 Title',              
  //         rate : 9.2        
  //        },
  //        {
  //         ImageURL: '../../../assets/images/card.jpg',
  //         title : 'Movies #3 Title',              
  //         rate : 9.3        
  //        },
  //        {
  //         ImageURL: '../../../assets/images/card.jpg',
  //         title : 'Movies #4 Title',              
  //         rate : 9.4       
  //        },
  //        {
  //         ImageURL: '../../../assets/images/card.jpg',
  //         title : 'Movies #5 Title',              
  //         rate : 9.5       
  //        },
  //        {
  //         ImageURL: '../../../assets/images/card.jpg',
  //         title : 'Movies #6 Title',              
  //         rate : 9.6     
  //        },
  //        {
  //         ImageURL: '../../../assets/images/card.jpg',
  //         title : 'Movies #7 Title',              
  //         rate : 9.7       
  //        },
  //        {
  //         ImageURL: '../../../assets/images/card.jpg',
  //         title : 'Movies #8 Title',              
  //         rate : 9.8       
  //        },
  //        {
  //         ImageURL: '../../../assets/images/card.jpg',
  //         title : 'Movies #9 Title',              
  //         rate : 9.9       
  //        }

  // ];
  
  fanSimilarMovies : any[] = [];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getFanSimilarMovies();
  }
  
  getFanSimilarMovies(){
    this.httpClient.get<any[]>('assets/data/fanSimilarMovies.json').subscribe((data:any[]) =>{
      this.fanSimilarMovies = data;
    })
  }
}
