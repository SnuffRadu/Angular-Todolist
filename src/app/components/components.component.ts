import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  ngOnInit() {

    this.todos = [
      {
        id: 1,
        title: 'Todo one',
        completed:true
      },
      {
        id: 2,
        title: 'Todo two',
        completed:true
      },
      {
        id: 3,
        title: 'Todo three',
        completed:true
      },
    ]
  }
}
