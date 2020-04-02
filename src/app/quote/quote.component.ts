import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuote:Quote[] =[
    new Quote('Drizzy Drake','Drake', 'Working on the weekend like usual',0,0,new Date()),

  ] 


  //Add new Quote object to the Quote[] array
  addNewQuote(quote){
    this.myQuote.push(quote);
    console.log(this.myQuote);
    
    
  }
  //Initialize the upvote and downvote properties with 0
  

  increaseUpvote(i){
    this.myQuote[i].upVote += 1;
  }
  increaseDownVote(i){
    this.myQuote[i].downVote += 1;

  }
  deleteQuote(i){
    this.myQuote.splice(i,1);
  }

  //To highlight Quote with highest upvote
  toBeHighlighted:number
  index:number
  highlightQuote():number{
    this.toBeHighlighted = 0
    for(this.index = 0 ; this.index <this.myQuote.length ; this.index++){
      if(this.myQuote[this.index].upVote  > this.toBeHighlighted){
        this.toBeHighlighted = this.myQuote[this.index].upVote
      }
    }
    return this.toBeHighlighted
  }

  constructor() { }

  ngOnInit(): void {
  }

}
