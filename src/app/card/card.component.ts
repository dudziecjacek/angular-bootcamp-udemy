import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title = '';
  @Input() imgUrl = '';
  @Input() description = '';
  @Input() username = '';

  constructor() {
    console.log(this.imgUrl);
  }

  ngOnInit() {
  }

}
