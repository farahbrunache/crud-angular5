import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../i-todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: ITodo;
  constructor() { }

  ngOnInit() {
  }

}
