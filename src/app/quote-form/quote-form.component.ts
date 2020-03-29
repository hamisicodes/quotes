import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("","","");
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
    console.log('SUbmitted')
    this.addQuote.emit(this.newQuote);
    this.newQuote =  new Quote("","","");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
