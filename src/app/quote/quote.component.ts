import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuote:Quote[] =[
    new Quote('Drizzy Drake','Drake', 'Working on the weekend ike usual'),

  ] 

  addNewQuote(quote){
    this.myQuote.push(quote);
    console.log(this.myQuote);
    
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
