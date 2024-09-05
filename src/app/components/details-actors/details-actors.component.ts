import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css']
})
export class DetailsActorsComponent implements OnInit {
    
//   actMovies : any[] = 
//  [ 
//        {
//         ImageURL: '../../../assets/images/actorpix.jpg',
//         name : 'actors name #1',
//         role : 'actors role #1'
//        },

//        {
//         ImageURL: '../../../assets/images/actorpix.jpg',
//         name : 'actors name #2',
//         role : 'actors role #2'
//        },

//        {
//         ImageURL: '../../../assets/images/actorpix.jpg',
//         name : 'actors name #3',
//         role : 'actors role #3'
//        },

//        {
//         ImageURL: '../../../assets/images/actorpix.jpg',
//         name : 'actors name #4',
//         role : 'actors role #4'
//        },

//        {
//         ImageURL: '../../../assets/images/actorpix.jpg',
//         name : 'actors name #5',
//         role : 'actors role #5'
//        },

//        {
//         ImageURL: '../../../assets/images/actorpix.jpg',
//         name : 'actors name #6',
//         role : 'actors role #6'
//        },

//        {
//         ImageURL: '../../../assets/images/actorpix.jpg',
//         name : 'actors name #7',
//         role : 'actors role #7'
//        },

//        {
//         ImageURL: '../../../assets/images/actorpix.jpg',
//         name : 'actors name #8',
//         role : 'actors role #8'
//        },

//        {
//         ImageURL: '../../../assets/images/actorpix.jpg',
//         name : 'actors name #9',
//         role : 'actors role #9'
//        },

//        {
//         ImageURL: '../../../assets/images/actorpix.jpg',
//         name : 'actors name #10',
//         role : 'actors role #10'
//        }
//  ];

actMovies : any[] = [];

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.getActMovies();
  }
   
  getActMovies(){
    this.httpClient.get<any[]>('assets/data/actMovies.json').subscribe((data:any[])=>{
            this.actMovies = data;
         })
  }
}
