import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  
  //errorColor = "text-danger";
  //successColor = "text-success";
  //isSucess = false;

  //Record in typescript is similar to dictionary c#
  //currentStyle: Record<string, string> = {};
   
  // isCenter = true;
  // isSuccess =false;
  // isLarge = true;

  //constructor() {
    //  this.currentStyle = {
    //   'text-align': this.isCenter ? "center" :'',
    //   'color': this.isSuccess ? "green" : "red",
    //    'font-size': this.isLarge ? "large" : "50px"
    //  }
  // }

    
 // isvisible = true; //testing *ngIf

    //integerValue = 15; //testing *ngSwitch

     //isActive = false; //customizeIf directive


//   fanFavoriteMovies : any[] = 
//  [ 
//        {
//         ImageURL: '../../../assets/images/card.jpg',
//         title : 'Movies #1 Title',
//         actor : 'Movies #1 actors',
//         year : '2024',
//         rank : 9.5,
//         trophy: 1
//        },

//        {
//         ImageURL: '../../../assets/images/card.jpg',
//         title : 'Movies #2 Title',
//         actor : 'Movies #2 actors',
//         year : '2024',
//         rank : 9.6,
//          trophy: 2
//        },

//        {
//         ImageURL: '../../../assets/images/card.jpg',
//         title : 'Movies #3 Title',
//         actor : 'Movies #3 actors',
//         year : '2024',
//         rank : 9.7,
//          trophy: 3
//        },

//        {
//         ImageURL: '../../../assets/images/card.jpg',
//         title : 'Movies #4 Title',
//         actor : 'Movies #4 actors',
//         year : '2024',
//         rank : 9.8,
//          trophy: 4
//        }
//  ];

//  cardMoviesdisplay : any[] = 
//  [ 
//        {
//         ImageURL: '../../../assets/images/card.jpg',
//         title : 'Card #1 Title',
//         text : 'This is a longer movies.',
//         button : 'Trailer'
//        },
       
//        {
//         ImageURL: '../../../assets/images/card.jpg',
//         title : 'Card #2 Title',
//         text : 'movies description',
//        button : 'Trailer'
//        }

//       //  {
//       //   ImageURL: '../../../assets/images/card.jpg',
//       //   title : 'Card #3 Title',
//       //   text : 'Ready to have fun!',
//       //  button : 'Trailer'
//       //  }
      
//   ];

      fanFavoriteMovies : any[] = [];

      cardMoviesdisplay : any[] =[];

  //to use our HttpClientModule we need to INJECT HttpClient
  constructor(private httpClient : HttpClient,
    private moviesService: MoviesService
  ) {}


   ngOnInit(): void {
         this.getFanFavoriteMovies();
         this.getCardMoviesdisplay();
     }
     
     getFanFavoriteMovies() {
         this.httpClient.get<any[]>
         ('assets/data/fanFavoriteMovies.json').subscribe(
          {
            next: (data:any[])=>{
              this.fanFavoriteMovies = data;
          },
            error:(error) =>{
              console.log('[fanFavoriteMovies]Error loading fan favorite movie', error);
            }         
         })
     }

     getCardMoviesdisplay(){
      this.httpClient.get<any[]>
      ('assets/data/cardMoviesdisplay.json').subscribe(  {
        next: (data:any[])=>{
          this.cardMoviesdisplay = data;
      },
        error:(error) =>{
          console.log('[cardMoviesdisplay] Error loading fan favorite movie', error);
        },
        complete: ()=>{
          console.log('[cardMoviesdisplay] Request completed successfully');
        }        
      })
     }
}
