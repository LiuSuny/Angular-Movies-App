import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit {
 
//   movieReview : any[] = 
//  [ 
//        {
//         rate : '7.5',       
//         text : 'This is a review description section and sometime the review can be very long that why we are using an accordion',
//         reviewAuthor: 'review author',
//         peopleView : '100 out of 120 found this useful'
//       },
      
//       {
//         rate : '7.6',
       
//         text : 'This is a review description section and sometime the review can be very long that why we are using an accordion',
//         reviewAuthor: 'review author',
//         peopleView : '100 out of 120 found this useful'
//       },

//       {
//         rate : '7.7',
        
//         text : 'This is a review description section and sometime the review can be very long that why we are using an accordion',
//         reviewAuthor: 'review author',
//         peopleView : '100 out of 120 found this useful'
//       },

//       {
//         rate : '7.8',
      
//         text : 'This is a review description section and sometime the review can be very long that why we are using an accordion',
//         reviewAuthor: 'review author',
//         peopleView : '100 out of 120 found this useful'
//       },

//       {
//         rate : '7.9',
       
//         text : 'This is a review description section and sometime the review can be very long that why we are using an accordion',
//         reviewAuthor: 'review author',
//         peopleView : '100 out of 120 found this useful'
//       }     
//  ];

movieReview : any[] = [];

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.getMovieReview();
  }

  getMovieReview(){
    this.httpClient.get<any[]>('assets/data/movieReview.json').subscribe((data:any[])=>{
      this.movieReview = data;
   })
  }
}
