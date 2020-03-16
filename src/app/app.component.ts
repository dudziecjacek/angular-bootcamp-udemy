import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  randomSentence: string;
  inputSentence: string;

  constructor() {
    this.randomSentence = lorem.sentence();
    this.inputSentence = '';
  }

  compareInputToSentence(value) {
    this.inputSentence = value;
  }

  compareLetters(letter, inputSentence) {
    if (!inputSentence) { return 'gray'; }

    if (letter === inputSentence) { return 'green'; } else if (letter !== inputSentence) { return 'red'; }
    // letter === inputSentence[i] ? 'green' : 'red'
  }

}
