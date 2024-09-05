import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/data/model/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedback : Feedback = new Feedback('', '', 8, '', '');
  
  constructor() { 
  }

  ngOnInit(): void {

  }

  submitFeedback(){
    console.log('Feedback form [submit] successfully', this.feedback);
  }

}
