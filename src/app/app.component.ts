import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  includeLetters: boolean;
  password: string;
  includeNumbers: boolean;
  includeSymbols: boolean;
  length: number;

  constructor() {
    this.password = '';
    this.includeLetters = false;
    this.includeNumbers = false;
    this.includeSymbols = false;
    this.length = 0;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value, 10);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      console.log(this.length);
    }
  }

  onButtonClick() {
    const numbers = '123456789';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '~!@#$%^&*()_+-=';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    const arrOfChars = validChars.split('');
    const generatedPassword = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.length; i++) {
      generatedPassword.push(arrOfChars[Math.floor(Math.random() * arrOfChars.length)]);
    }
    this.password = generatedPassword.join('');

  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

}
