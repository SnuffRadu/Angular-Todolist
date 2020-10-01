import { Component, OnInit } from '@angular/core';
import { Todo } from 'C:\Users\Snuff Radu\Documents\angular-crash-todolist\src\app\models\Todo';

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
      }
    ]
  }
}
