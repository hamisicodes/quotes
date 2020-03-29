import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuote:Quote[] =[
    new Quote('Drizzy Drake','Drake', 'Working on the weekend like usual'),

  ] 

  //Add new Quote object to the Quote[] array
  addNewQuote(quote){
    this.myQuote.push(quote);
    console.log(this.myQuote);
    
    
  }
  //Initialize the upvote and downvote properties with 0
   upVote = 0;
   downVote = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
