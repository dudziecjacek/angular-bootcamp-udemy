import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpened: boolean = false;
  items = [
    { title: 'Why is the sky blue', content: 'Because it is' },
    { title: 'What does an orange taste like', content: 'Tastes like an orange' },
    { title: 'What color is that cat', content: 'This cat is gray' },
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.modalOpened = !this.modalOpened;
  }

}
