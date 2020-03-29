import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myQuote:Quote = new Quote('Martin Lurther','Abbas Ngao', 'I love Food.A lot of Food');
  addNewQuote(quote){
    this.myQuote = quote;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
